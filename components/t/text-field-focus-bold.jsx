import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2d8zobch.css';
import '../../css/u/urrp9ssxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2d8zobch"/><path clip-rule="evenodd" class="urrp9ssxh"/>`,
		"fallback": "solar:text-field-focus-bold",
	});
}

export default Component;
