import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmcricc-j.css';
import '../../css/k/kkd7-e-we.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmcricc-j"/><path class="kkd7-e-we"/>`,
		"fallback": "energy-icons:smart-plug-48-bold",
	});
}

export default Component;
