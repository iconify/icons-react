import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj8r7vbsk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj8r7vbsk"/>`,
		"fallback": "pinhead:person-wearing-waiters-attire-holding-tray-with-wine-glass",
	});
}

export default Component;
