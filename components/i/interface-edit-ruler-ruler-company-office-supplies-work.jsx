import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7w6vhb0a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7w6vhb0a"/>`,
		"fallback": "streamline:interface-edit-ruler-ruler-company-office-supplies-work",
	});
}

export default Component;
