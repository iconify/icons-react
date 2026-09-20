import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm3un7b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm3un7b7d"/>`,
		"fallback": "lets-icons:nfc-light",
	});
}

export default Component;
