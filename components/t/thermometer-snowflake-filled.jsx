import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxcw1zbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxcw1zbpi"/>`,
		"fallback": "lucide-extended:thermometer-snowflake-filled",
	});
}

export default Component;
