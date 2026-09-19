import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg7wgbbdt.css';
import '../../css/e/efsxz5dnj.css';
import '../../css/r/rckjn3l5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg7wgbbdt"/><path class="efsxz5dnj"/><path class="rckjn3l5t"/>`,
		"fallback": "ion:ios-copy",
	});
}

export default Component;
