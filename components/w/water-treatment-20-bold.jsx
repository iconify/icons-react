import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqk1cmb9r.css';
import '../../css/n/nqlwmj21u.css';
import '../../css/n/ne9n9bcpk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqk1cmb9r"/><path class="nqlwmj21u"/><path class="ne9n9bcpk"/>`,
		"fallback": "energy-icons:water-treatment-20-bold",
	});
}

export default Component;
