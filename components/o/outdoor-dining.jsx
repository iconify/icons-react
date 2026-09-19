import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyj3-clpj.css';
import '../../css/t/tfo6zr1jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyj3-clpj"/><path class="tfo6zr1jo"/>`,
		"fallback": "boxicons:outdoor-dining",
	});
}

export default Component;
