import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukbyayb8m.css';
import '../../css/f/fp6c9u3kg.css';
import '../../css/g/ggxhooboy.css';
import '../../css/k/k6mrqp2bu.css';
import '../../css/t/te1q7v41z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukbyayb8m"/><path class="fp6c9u3kg"/><path class="ggxhooboy"/><path class="k6mrqp2bu"/><path class="te1q7v41z"/>`,
		"fallback": "energy-icons:pv-string-20",
	});
}

export default Component;
