import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/municvskz.css';
import '../../css/p/pcsp0g05w.css';
import '../../css/c/cz234ebtm.css';
import '../../css/l/luhy-nlmi.css';
import '../../css/y/yu_vqvble.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="municvskz"/><path class="pcsp0g05w"/><path class="cz234ebtm"/><path class="luhy-nlmi"/><path class="yu_vqvble"/></g>`,
		"fallback": "streamline-kameleon-color:luggage-cart-duo",
	});
}

export default Component;
