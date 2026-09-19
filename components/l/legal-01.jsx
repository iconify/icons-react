import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/z5xqi1bik.css';
import '../../css/a/a-ft82baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="z5xqi1bik"/><path class="a-ft82baw"/></g>`,
		"fallback": "hugeicons:legal-01",
	});
}

export default Component;
