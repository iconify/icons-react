import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3j6f0b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3j6f0b0t"/>`,
		"fallback": "tabler:stairs-down",
	});
}

export default Component;
