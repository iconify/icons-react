import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7-dvibjv.css';
import '../../css/c/c2_o5pxqg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7-dvibjv"/><path class="c2_o5pxqg"/>`,
		"fallback": "energy-icons:wallet-48",
	});
}

export default Component;
