import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4hv076ez.css';
import '../../css/c/cf_myobqe.css';
import '../../css/o/og0kpn30n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4hv076ez"/><path class="cf_myobqe"/><path class="og0kpn30n"/>`,
		"fallback": "energy-icons:waste-to-energy-48",
	});
}

export default Component;
