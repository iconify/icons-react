import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afgz_374z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afgz_374z"/>`,
		"fallback": "streamline:interface-lighting-brightness-2-bright-adjust-brightness-adjustment-sun-raise-controls-half",
	});
}

export default Component;
