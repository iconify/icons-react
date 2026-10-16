import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f__3z1bhu.css';
import '../../css/g/grgea9bwv.css';
import '../../css/n/nroycebvo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f__3z1bhu"/><path class="grgea9bwv"/><path class="nroycebvo"/>`,
		"fallback": "energy-icons:sluice-gate-20-bold",
	});
}

export default Component;
