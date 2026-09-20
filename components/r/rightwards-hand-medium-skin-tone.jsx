import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl71cr7wd.css';
import '../../css/n/nw_fw7zya.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl71cr7wd"/><path class="nw_fw7zya"/>`,
		"fallback": "openmoji:rightwards-hand-medium-skin-tone",
	});
}

export default Component;
