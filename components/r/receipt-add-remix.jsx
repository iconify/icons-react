import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7dlc45fo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x7dlc45fo"/>`,
		"fallback": "streamline:receipt-add-remix",
	});
}

export default Component;
