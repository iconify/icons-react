import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlhsvkb_y.css';
import '../../css/p/pkf1_sbdg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlhsvkb_y"/><path class="pkf1_sbdg"/>`,
		"fallback": "energy-icons:lockbox-48-bold",
	});
}

export default Component;
