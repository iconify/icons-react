import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emhcgzbmm.css';
import '../../css/q/q2v_q547a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emhcgzbmm"/><path class="q2v_q547a"/>`,
		"fallback": "energy-icons:shield-check-20",
	});
}

export default Component;
