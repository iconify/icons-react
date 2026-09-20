import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiy3i7hdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oiy3i7hdg"/>`,
		"fallback": "solar:skirt-outline",
	});
}

export default Component;
