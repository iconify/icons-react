import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_fvll7vg.css';
import '../../css/m/mdlomob-h.css';
import '../../css/w/w4rg-tzhz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_fvll7vg"/><path class="mdlomob-h"/><path class="w4rg-tzhz"/>`,
		"fallback": "energy-icons:speaker-wifi-20",
	});
}

export default Component;
