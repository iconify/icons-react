import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ansskgocr.css';
import '../../css/f/f_g898bnj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ansskgocr"/><path class="f_g898bnj"/>`,
		"fallback": "ion:ios-git-compare",
	});
}

export default Component;
