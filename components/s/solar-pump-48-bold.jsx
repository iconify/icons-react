import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx48pmbno.css';
import '../../css/j/j6ylgsbjb.css';
import '../../css/j/jtmiwfbps.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx48pmbno"/><path class="j6ylgsbjb"/><path class="jtmiwfbps"/>`,
		"fallback": "energy-icons:solar-pump-48-bold",
	});
}

export default Component;
