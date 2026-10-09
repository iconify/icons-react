import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyrr1ab6u.css';
import '../../css/j/jz6o0pbsq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyrr1ab6u"/><path class="jz6o0pbsq"/>`,
		"fallback": "energy-icons:rego-certificate-20-bold",
	});
}

export default Component;
