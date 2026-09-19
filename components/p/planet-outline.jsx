import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd-4zjz7r.css';
import '../../css/o/ohm6g2bps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd-4zjz7r"/><circle class="ohm6g2bps"/>`,
		"fallback": "famicons:planet-outline",
	});
}

export default Component;
