import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd5r3x2_e.css';
import '../../css/b/b4h63gpfv.css';
import '../../css/c/c5l9tbr2k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd5r3x2_e"/><path class="b4h63gpfv"/><path class="c5l9tbr2k"/>`,
		"fallback": "energy-icons:savings-jar-48-bold",
	});
}

export default Component;
