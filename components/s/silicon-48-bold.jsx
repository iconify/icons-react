import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnjw03tfc.css';
import '../../css/n/nmjmojkvp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnjw03tfc"/><path class="nmjmojkvp"/>`,
		"fallback": "energy-icons:silicon-48-bold",
	});
}

export default Component;
