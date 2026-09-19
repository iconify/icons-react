import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeipt5bda.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeipt5bda"/>`,
		"fallback": "fluent-mdl2:test-case",
	});
}

export default Component;
