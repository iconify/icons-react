import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc5dhreuj.css';
import '../../css/o/oi73mpbyr.css';
import '../../css/q/qjjqbcoej.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc5dhreuj"/><path class="oi73mpbyr"/><path class="qjjqbcoej"/>`,
		"fallback": "energy-icons:syringe-20",
	});
}

export default Component;
