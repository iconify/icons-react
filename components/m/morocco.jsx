import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq6tdnpts.css';
import '../../css/t/t3di-p3xx.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq6tdnpts"/><path class="t3di-p3xx"/>`,
		"fallback": "tabler-flags:morocco",
	});
}

export default Component;
