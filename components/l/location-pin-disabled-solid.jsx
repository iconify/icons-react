import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbs3igb5t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fbs3igb5t"/>`,
		"fallback": "streamline:location-pin-disabled-solid",
	});
}

export default Component;
