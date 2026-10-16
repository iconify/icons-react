import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwgmdib_l.css';
import '../../css/o/opjlpfb1h.css';
import '../../css/s/s664m142x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwgmdib_l"/><path class="opjlpfb1h"/><path class="s664m142x"/>`,
		"fallback": "energy-icons:pcb-20-bold",
	});
}

export default Component;
