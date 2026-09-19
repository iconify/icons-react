import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so4ehfbso.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so4ehfbso"/>`,
		"fallback": "fluent-mdl2:remove-content",
	});
}

export default Component;
