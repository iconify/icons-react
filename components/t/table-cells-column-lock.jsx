import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbv4uiyrx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbv4uiyrx"/>`,
		"fallback": "fa7-solid:table-cells-column-lock",
	});
}

export default Component;
