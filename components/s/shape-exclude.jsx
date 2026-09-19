import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d57sztm3t.css';
import '../../css/z/z5b9-nbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d57sztm3t"/><path class="z5b9-nbek"/>`,
		"fallback": "boxicons:shape-exclude",
	});
}

export default Component;
