import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh-zu0p9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh-zu0p9o"/>`,
		"fallback": "game-icons:sunset",
	});
}

export default Component;
