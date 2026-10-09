import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk7-rkadp.css';
import '../../css/k/k_mk90fyx.css';
import '../../css/f/fhg9q1beh.css';
import '../../css/p/p6shp21zo.css';
import '../../css/i/ihicaccwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk7-rkadp"/><path class="k_mk90fyx"/><path class="fhg9q1beh"/><path class="p6shp21zo"/><path class="ihicaccwh"/>`,
		"fallback": "energy-icons:solar-panel-check-48",
	});
}

export default Component;
