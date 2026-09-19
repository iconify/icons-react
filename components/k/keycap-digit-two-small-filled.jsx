import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlxi2zhro.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlxi2zhro"/>`,
		"fallback": "dinkie-icons:keycap-digit-two-small-filled",
	});
}

export default Component;
