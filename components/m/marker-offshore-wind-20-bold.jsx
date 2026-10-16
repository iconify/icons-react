import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hei8_htdz.css';
import '../../css/i/i8o4zccnq.css';
import '../../css/i/i7l6kd2gn.css';
import '../../css/a/avx7231xh.css';
import '../../css/f/f3cd6bcna.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hei8_htdz"/><path class="i8o4zccnq"/><path class="i7l6kd2gn"/><path class="avx7231xh"/><path class="f3cd6bcna"/>`,
		"fallback": "energy-icons:marker-offshore-wind-20-bold",
	});
}

export default Component;
