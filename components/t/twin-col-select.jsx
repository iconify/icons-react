import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqx-vr3bx.css';
import '../../css/m/mj3ha3b2h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqx-vr3bx"/><path class="mj3ha3b2h"/>`,
		"fallback": "vaadin:twin-col-select",
	});
}

export default Component;
