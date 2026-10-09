import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kawbyvyzr.css';
import '../../css/f/fr48pn7bt.css';
import '../../css/s/seuqwvv-o.css';
import '../../css/j/jfn5_8beu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kawbyvyzr"/><path class="fr48pn7bt"/><path class="seuqwvv-o"/><path class="jfn5_8beu"/>`,
		"fallback": "energy-icons:teapot-20-bold",
	});
}

export default Component;
