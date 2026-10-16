import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hei8_htdz.css';
import '../../css/w/wtq6wobvy.css';
import '../../css/g/g5a07ectm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hei8_htdz"/><path class="wtq6wobvy"/><path class="g5a07ectm"/>`,
		"fallback": "energy-icons:marker-hydrogen-20-bold",
	});
}

export default Component;
