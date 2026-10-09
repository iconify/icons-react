import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku9n4pj_o.css';
import '../../css/j/j8mi95bft.css';
import '../../css/u/u35e7_b0b.css';
import '../../css/d/d6cvwtbsp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku9n4pj_o"/><path class="j8mi95bft"/><path class="u35e7_b0b"/><path class="d6cvwtbsp"/>`,
		"fallback": "energy-icons:radiator-valve-48-bold",
	});
}

export default Component;
