import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yakfv4bol.css';
import '../../css/i/ivpk4lbsu.css';
import '../../css/h/hqe77eb4x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yakfv4bol"/><path class="ivpk4lbsu"/><path class="hqe77eb4x"/>`,
		"fallback": "energy-icons:micro-hydro-20",
	});
}

export default Component;
