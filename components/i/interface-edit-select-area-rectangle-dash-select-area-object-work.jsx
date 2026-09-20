import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trh073bxd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trh073bxd"/>`,
		"fallback": "streamline:interface-edit-select-area-rectangle-dash-select-area-object-work",
	});
}

export default Component;
