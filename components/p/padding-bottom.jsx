import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8k9kjbqe.css';
import '../../css/u/u_90zur1c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8k9kjbqe"/><path class="u_90zur1c"/>`,
		"fallback": "vaadin:padding-bottom",
	});
}

export default Component;
