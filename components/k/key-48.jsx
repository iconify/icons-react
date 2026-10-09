import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyg_4gbyx.css';
import '../../css/x/xua85z4wn.css';
import '../../css/p/petbblbsk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyg_4gbyx"/><path class="xua85z4wn"/><path class="petbblbsk"/>`,
		"fallback": "energy-icons:key-48",
	});
}

export default Component;
