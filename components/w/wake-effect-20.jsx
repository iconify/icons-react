import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgz8hfjwl.css';
import '../../css/f/f55k4bcmg.css';
import '../../css/m/ma4byl76i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgz8hfjwl"/><path class="f55k4bcmg"/><path class="ma4byl76i"/>`,
		"fallback": "energy-icons:wake-effect-20",
	});
}

export default Component;
