import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x5kn6sevq.css';
import '../../css/h/h0frr_tyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x5kn6sevq"/><path class="h0frr_tyv"/></g>`,
		"fallback": "hugeicons:motion-02",
	});
}

export default Component;
