import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgdwnk94e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgdwnk94e"/>`,
		"fallback": "streamline:interface-edit-color-drop-pick-color-drop-pick-company-office-supplies-work",
	});
}

export default Component;
