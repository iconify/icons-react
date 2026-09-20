import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lah41lb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lah41lb2v"/>`,
		"fallback": "thesvg-color:tata",
	});
}

export default Component;
