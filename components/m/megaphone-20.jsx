import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st-nb-bnw.css';
import '../../css/t/tiq8xcncs.css';
import '../../css/i/irdsaebul.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st-nb-bnw"/><path class="tiq8xcncs"/><path class="irdsaebul"/>`,
		"fallback": "energy-icons:megaphone-20",
	});
}

export default Component;
