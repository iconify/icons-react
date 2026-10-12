import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drbsluqal.css';
import '../../css/q/q5hhuwpif.css';
import '../../css/x/xak2o0bmu.css';
import '../../css/k/k6sa60boh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drbsluqal"/><path class="q5hhuwpif"/><path class="xak2o0bmu"/><path class="k6sa60boh"/>`,
		"fallback": "energy-icons:map-pin-x-20-bold",
	});
}

export default Component;
