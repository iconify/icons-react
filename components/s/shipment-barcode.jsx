import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g635niwpv.css';
import '../../css/r/rx4rzrkqv.css';
import '../../css/c/c0f4j5bgw.css';
import '../../css/p/p9t_uwz7b.css';
import '../../css/s/s1ga2s2ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g635niwpv"/><path class="rx4rzrkqv"/><path class="c0f4j5bgw"/><path class="p9t_uwz7b"/><path class="s1ga2s2ll"/></g>`,
		"fallback": "streamline-ultimate-color:shipment-barcode",
	});
}

export default Component;
