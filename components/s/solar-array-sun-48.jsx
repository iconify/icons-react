import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtqyvac2f.css';
import '../../css/n/n6kcq-_mh.css';
import '../../css/r/rkn8k_q9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtqyvac2f"/><path class="n6kcq-_mh"/><path class="rkn8k_q9m"/>`,
		"fallback": "energy-icons:solar-array-sun-48",
	});
}

export default Component;
