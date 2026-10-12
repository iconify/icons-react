import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et_wnkuox.css';
import '../../css/w/wqhrjbcye.css';
import '../../css/q/qdytrdbev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et_wnkuox"/><path class="wqhrjbcye"/><path class="qdytrdbev"/>`,
		"fallback": "energy-icons:solar-inverter-check-48",
	});
}

export default Component;
