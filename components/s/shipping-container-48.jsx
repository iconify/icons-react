import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay__5bcmu.css';
import '../../css/f/ff8py9bze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay__5bcmu"/><path class="ff8py9bze"/>`,
		"fallback": "energy-icons:shipping-container-48",
	});
}

export default Component;
