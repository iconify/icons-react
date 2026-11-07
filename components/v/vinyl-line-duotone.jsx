import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gp0egaclj.css';
import '../../css/m/mjwo7ebtq.css';
import '../../css/c/cs6wjacfk.css';
import '../../css/l/l9rlr6fkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="gp0egaclj"/><path class="mjwo7ebtq"/><path class="cs6wjacfk"/><path class="l9rlr6fkk"/></g>`,
		"fallback": "solar:vinyl-line-duotone",
	});
}

export default Component;
