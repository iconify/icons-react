import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arx939g8c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arx939g8c"/>`,
		"fallback": "dinkie-icons:keycap-digit-eight-small-filled",
	});
}

export default Component;
