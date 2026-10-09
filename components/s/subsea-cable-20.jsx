import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7vtw8pys.css';
import '../../css/w/w00mpvx0x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7vtw8pys"/><path class="w00mpvx0x"/>`,
		"fallback": "energy-icons:subsea-cable-20",
	});
}

export default Component;
