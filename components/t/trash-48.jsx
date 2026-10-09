import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8qaagfdl.css';
import '../../css/t/teo_t3bjd.css';
import '../../css/y/yg0rsvfpa.css';
import '../../css/p/pbaroequs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8qaagfdl"/><path class="teo_t3bjd"/><path class="yg0rsvfpa"/><path class="pbaroequs"/>`,
		"fallback": "energy-icons:trash-48",
	});
}

export default Component;
