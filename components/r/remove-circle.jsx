import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw7p0cfwb.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw7p0cfwb"/>`,
		"fallback": "memory:remove-circle",
	});
}

export default Component;
