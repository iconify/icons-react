import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vidas8bkh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vidas8bkh"/>`,
		"fallback": "pinhead:kick-scooter-with-power-cord",
	});
}

export default Component;
