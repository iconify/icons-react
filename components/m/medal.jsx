import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh5xl2syl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh5xl2syl"/>`,
		"fallback": "iconoir:medal",
	});
}

export default Component;
