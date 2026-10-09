import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpbyx1ete.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpbyx1ete"/>`,
		"fallback": "energy-icons:pentagon-48",
	});
}

export default Component;
