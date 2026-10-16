import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty5a_vbpt.css';
import '../../css/u/ubxf06b4w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty5a_vbpt"/><path class="ubxf06b4w"/>`,
		"fallback": "energy-icons:panel-left-close-48",
	});
}

export default Component;
