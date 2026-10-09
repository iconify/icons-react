import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krobukb5c.css';
import '../../css/t/tbhx0yb6y.css';
import '../../css/m/m3r1373vs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krobukb5c"/><path class="tbhx0yb6y"/><path class="m3r1373vs"/>`,
		"fallback": "energy-icons:paint-roller-20",
	});
}

export default Component;
