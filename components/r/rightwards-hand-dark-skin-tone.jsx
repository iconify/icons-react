import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc9f3eygk.css';
import '../../css/n/nw_fw7zya.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc9f3eygk"/><path class="nw_fw7zya"/>`,
		"fallback": "openmoji:rightwards-hand-dark-skin-tone",
	});
}

export default Component;
