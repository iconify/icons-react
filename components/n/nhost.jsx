import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geu0kot6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geu0kot6j"/>`,
		"fallback": "thesvg:nhost",
	});
}

export default Component;
