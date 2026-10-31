import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jztn7z8ge.css';
import '../../css/x/x47r2-ccs.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jztn7z8ge"/><path class="x47r2-ccs"/>`,
		"fallback": "tabler-flags:south-american-union",
	});
}

export default Component;
