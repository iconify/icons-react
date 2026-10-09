import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upfy9abxj.css';
import '../../css/m/m0wmagbew.css';
import '../../css/x/xaqkq-baz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upfy9abxj"/><path class="m0wmagbew"/><path class="xaqkq-baz"/>`,
		"fallback": "energy-icons:transformer-48-bold",
	});
}

export default Component;
