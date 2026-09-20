import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g635niwpv.css';
import '../../css/r/rx4rzrkqv.css';
import '../../css/c/c0f4j5bgw.css';
import '../../css/r/rw2ytpg0a.css';
import '../../css/f/fk21-ab6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g635niwpv"/><path class="rx4rzrkqv"/><path class="c0f4j5bgw"/><path class="rw2ytpg0a"/><path class="fk21-ab6q"/></g>`,
		"fallback": "streamline-ultimate-color:shipment-tracking",
	});
}

export default Component;
