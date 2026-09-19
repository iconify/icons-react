import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atljf9blg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atljf9blg"/>`,
		"fallback": "griddy-icons:luggage-filled",
	});
}

export default Component;
