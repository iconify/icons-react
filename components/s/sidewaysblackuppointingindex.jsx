import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krdoyobux.css';
import '../../css/g/glhekuvna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krdoyobux"/><path class="glhekuvna"/>`,
		"fallback": "fxemoji:sidewaysblackuppointingindex",
	});
}

export default Component;
