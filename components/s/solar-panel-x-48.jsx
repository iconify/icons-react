import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk7-rkadp.css';
import '../../css/k/k_mk90fyx.css';
import '../../css/f/fhg9q1beh.css';
import '../../css/p/p6shp21zo.css';
import '../../css/t/t8dqc66mp.css';
import '../../css/v/vqbc74-cp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk7-rkadp"/><path class="k_mk90fyx"/><path class="fhg9q1beh"/><path class="p6shp21zo"/><path class="t8dqc66mp"/><path class="vqbc74-cp"/>`,
		"fallback": "energy-icons:solar-panel-x-48",
	});
}

export default Component;
