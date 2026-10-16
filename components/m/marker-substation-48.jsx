import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v855hut.css';
import '../../css/n/ngvqi5buw.css';
import '../../css/f/f9ek-9bwn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v855hut"/><path class="ngvqi5buw"/><path class="f9ek-9bwn"/>`,
		"fallback": "energy-icons:marker-substation-48",
	});
}

export default Component;
