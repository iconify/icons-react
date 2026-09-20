import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sda85vqfe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sda85vqfe"/>`,
		"fallback": "streamline:interface-arrows-loop-arrow-diagram-loop-infinity-repeat",
	});
}

export default Component;
