import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm9jpqbmc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm9jpqbmc"/>`,
		"fallback": "streamline-pixel:interface-essential-zoom-in-page",
	});
}

export default Component;
