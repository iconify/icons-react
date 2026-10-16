import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6lsc2brm.css';
import '../../css/u/uykl-2-4c.css';
import '../../css/m/mlich4fig.css';
import '../../css/n/ntp17abmb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6lsc2brm"/><path class="uykl-2-4c"/><path class="mlich4fig"/><path class="ntp17abmb"/>`,
		"fallback": "energy-icons:transistor-20-bold",
	});
}

export default Component;
