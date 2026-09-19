import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha5spmbrj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha5spmbrj"/>`,
		"fallback": "fluent-mdl2:triple-column-edit",
	});
}

export default Component;
