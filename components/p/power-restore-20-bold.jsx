import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs3_9lslw.css';
import '../../css/j/jg-yaccaq.css';
import '../../css/e/exrx6ubga.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs3_9lslw"/><path class="jg-yaccaq"/><path class="exrx6ubga"/>`,
		"fallback": "energy-icons:power-restore-20-bold",
	});
}

export default Component;
