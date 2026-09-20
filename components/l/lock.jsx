import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpf16_b7y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpf16_b7y"/>`,
		"fallback": "vaadin:lock",
	});
}

export default Component;
