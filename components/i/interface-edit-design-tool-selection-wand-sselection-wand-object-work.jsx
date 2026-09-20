import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp234nypf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp234nypf"/>`,
		"fallback": "streamline:interface-edit-design-tool-selection-wand-sselection-wand-object-work",
	});
}

export default Component;
