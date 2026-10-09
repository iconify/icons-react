import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_z99bhx.css';
import '../../css/w/wkx6n0o2a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_z99bhx"/><path class="wkx6n0o2a"/>`,
		"fallback": "energy-icons:invoice-48",
	});
}

export default Component;
