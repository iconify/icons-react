import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccnyeob1g.css';
import '../../css/i/i3bujsneb.css';
import '../../css/m/mccycacnb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccnyeob1g"/><path class="i3bujsneb"/><path class="mccycacnb"/>`,
		"fallback": "energy-icons:reply-all-20",
	});
}

export default Component;
