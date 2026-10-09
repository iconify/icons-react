import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu-0p7bqd.css';
import '../../css/w/w15l_846s.css';
import '../../css/x/xt4wfpdse.css';
import '../../css/e/e_o92zbrm.css';
import '../../css/e/e_awkjb1m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu-0p7bqd"/><path class="w15l_846s"/><path class="xt4wfpdse"/><path class="e_o92zbrm"/><path class="e_awkjb1m"/>`,
		"fallback": "energy-icons:pulley-20",
	});
}

export default Component;
