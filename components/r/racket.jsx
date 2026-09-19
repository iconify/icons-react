import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grb34gbeb.css';
import '../../css/m/mlcrs6b_l.css';
import '../../css/n/ne1pfgevp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grb34gbeb"/><path class="mlcrs6b_l"/><path class="ne1pfgevp"/>`,
		"fallback": "devicon:racket",
	});
}

export default Component;
