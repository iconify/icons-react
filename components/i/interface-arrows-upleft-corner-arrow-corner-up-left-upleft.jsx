import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tulnqjltw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tulnqjltw"/>`,
		"fallback": "streamline:interface-arrows-upleft-corner-arrow-corner-up-left-upleft",
	});
}

export default Component;
