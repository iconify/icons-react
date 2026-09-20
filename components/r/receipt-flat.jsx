import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7kxdhbki.css';
import '../../css/t/ttq90dbsu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z7kxdhbki"/><path clip-rule="evenodd" class="ttq90dbsu"/></g>`,
		"fallback": "streamline-flex-color:receipt-flat",
	});
}

export default Component;
