import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz9grnbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz9grnbxl"/>`,
		"fallback": "mage:megaphone-a-fill",
	});
}

export default Component;
