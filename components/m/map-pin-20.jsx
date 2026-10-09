import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9cx5cc5b.css';
import '../../css/l/lmjbu-ywi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9cx5cc5b"/><path class="lmjbu-ywi"/>`,
		"fallback": "energy-icons:map-pin-20",
	});
}

export default Component;
