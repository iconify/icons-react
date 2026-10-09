import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlo-1-b1r.css';
import '../../css/u/u95w5ybee.css';
import '../../css/z/z7ly-0cgq.css';
import '../../css/h/ha43yw8ah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlo-1-b1r"/><path class="u95w5ybee"/><path class="z7ly-0cgq"/><path class="ha43yw8ah"/>`,
		"fallback": "energy-icons:solar-tracker-48",
	});
}

export default Component;
