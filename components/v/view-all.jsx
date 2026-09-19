import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swvbl9dut.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swvbl9dut"/>`,
		"fallback": "fluent-mdl2:view-all",
	});
}

export default Component;
