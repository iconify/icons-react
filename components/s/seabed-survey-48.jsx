import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/savufeexy.css';
import '../../css/m/m7b13zbzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="savufeexy"/><path class="m7b13zbzp"/>`,
		"fallback": "energy-icons:seabed-survey-48",
	});
}

export default Component;
