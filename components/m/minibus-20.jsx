import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miccwacuq.css';
import '../../css/g/gtqceqbja.css';
import '../../css/f/f8wc0fbln.css';
import '../../css/y/yf8odfm8j.css';
import '../../css/r/ra3z0j7ob.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miccwacuq"/><path class="gtqceqbja"/><path class="f8wc0fbln"/><path class="yf8odfm8j"/><path class="ra3z0j7ob"/>`,
		"fallback": "energy-icons:minibus-20",
	});
}

export default Component;
