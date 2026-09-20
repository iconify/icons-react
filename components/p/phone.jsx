import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htlyx8b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htlyx8b5t"/>`,
		"fallback": "tabler:phone",
	});
}

export default Component;
