import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4slh4bwa.css';
import '../../css/k/kh5w1ccnj.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4slh4bwa"/><path class="kh5w1ccnj"/><path class="jeyqzjnhx"/>`,
		"fallback": "energy-icons:power-station-alert-20-bold",
	});
}

export default Component;
