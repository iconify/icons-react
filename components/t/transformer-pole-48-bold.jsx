import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chivyabpi.css';
import '../../css/u/u7007_xth.css';
import '../../css/h/h_ntzgbew.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chivyabpi"/><path class="u7007_xth"/><path class="h_ntzgbew"/>`,
		"fallback": "energy-icons:transformer-pole-48-bold",
	});
}

export default Component;
