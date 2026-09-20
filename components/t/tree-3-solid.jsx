import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egwo19joz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="egwo19joz"/>`,
		"fallback": "streamline:tree-3-solid",
	});
}

export default Component;
