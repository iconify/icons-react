import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy7sbxx0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy7sbxx0t"/>`,
		"fallback": "mdi:stackpath",
	});
}

export default Component;
