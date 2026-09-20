import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/gdrayebum.css';
import '../../css/s/saw53o2qp.css';
import '../../css/d/d2xz6hb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="gdrayebum"/><path class="saw53o2qp"/><circle class="d2xz6hb5j"/></g>`,
		"fallback": "solar:smartphone-2-linear",
	});
}

export default Component;
