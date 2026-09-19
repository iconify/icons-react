import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va4lsmbuj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va4lsmbuj"/>`,
		"fallback": "dinkie-icons:keycap-digit-five-filled",
	});
}

export default Component;
