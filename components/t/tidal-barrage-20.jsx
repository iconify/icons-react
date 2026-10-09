import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2p_4xcpi.css';
import '../../css/g/gj10flppe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2p_4xcpi"/><path class="gj10flppe"/>`,
		"fallback": "energy-icons:tidal-barrage-20",
	});
}

export default Component;
