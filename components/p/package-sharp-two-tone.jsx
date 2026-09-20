import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/je9q5tbre.css';
import '../../css/f/fajy6kjai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="je9q5tbre"/><path class="fajy6kjai"/></g>`,
		"fallback": "keyline-icons:package-sharp-two-tone",
	});
}

export default Component;
