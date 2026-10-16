import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl5mofb1p.css';
import '../../css/q/qf_72ga9r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl5mofb1p"/><path class="qf_72ga9r"/>`,
		"fallback": "energy-icons:pipe-tee-20-bold",
	});
}

export default Component;
