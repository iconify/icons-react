import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy3-jm4dn.css';
import '../../css/h/h0d_lm9zw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy3-jm4dn"/><path class="h0d_lm9zw"/>`,
		"fallback": "energy-icons:subscript-20-bold",
	});
}

export default Component;
