import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v05r4ubzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v05r4ubzw"/>`,
		"fallback": "keyline-icons:sticky-note-minus",
	});
}

export default Component;
