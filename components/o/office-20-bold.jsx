import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_1_eqb9t.css';
import '../../css/q/q02p0rb4d.css';
import '../../css/f/fwy8obcmv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_1_eqb9t"/><path class="q02p0rb4d"/><path class="fwy8obcmv"/>`,
		"fallback": "energy-icons:office-20-bold",
	});
}

export default Component;
