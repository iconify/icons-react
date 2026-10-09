import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj1y5cbbe.css';
import '../../css/u/uh_4a6zja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj1y5cbbe"/><path class="uh_4a6zja"/>`,
		"fallback": "energy-icons:rego-certificate-48-bold",
	});
}

export default Component;
