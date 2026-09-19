import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukg68oavl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukg68oavl"/>`,
		"fallback": "f7:rectangle-stack-fill-badge-plus",
	});
}

export default Component;
