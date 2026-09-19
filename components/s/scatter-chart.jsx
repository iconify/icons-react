import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcn1_2u_i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcn1_2u_i"/>`,
		"fallback": "fluent-mdl2:scatter-chart",
	});
}

export default Component;
