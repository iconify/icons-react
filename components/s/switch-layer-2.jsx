import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy91uv1gr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy91uv1gr"/>`,
		"fallback": "carbon:switch-layer-2",
	});
}

export default Component;
