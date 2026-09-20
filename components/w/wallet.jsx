import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi1izbb6k.css';
import '../../css/p/pwhd70axe.css';
import '../../css/w/wyqpkw8hp.css';
import '../../css/j/jpb4h6j8x.css';
import '../../css/z/zlq84lb8p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vi1izbb6k"/><path clip-rule="evenodd" class="pwhd70axe"/><path class="wyqpkw8hp"/><path class="jpb4h6j8x"/><path class="zlq84lb8p"/></g>`,
		"fallback": "streamline-color:wallet",
	});
}

export default Component;
