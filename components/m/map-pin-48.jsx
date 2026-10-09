import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v855hut.css';
import '../../css/r/r-fc1rbet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v855hut"/><path class="r-fc1rbet"/>`,
		"fallback": "energy-icons:map-pin-48",
	});
}

export default Component;
