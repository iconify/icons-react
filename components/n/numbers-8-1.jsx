import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4k57gbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4k57gbvl"/>`,
		"fallback": "tdesign:numbers-8-1",
	});
}

export default Component;
