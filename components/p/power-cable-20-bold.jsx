import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enj9kbcag.css';
import '../../css/l/ls7lhjm1d.css';
import '../../css/q/qi4h0bbag.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enj9kbcag"/><path class="ls7lhjm1d"/><path class="qi4h0bbag"/>`,
		"fallback": "energy-icons:power-cable-20-bold",
	});
}

export default Component;
