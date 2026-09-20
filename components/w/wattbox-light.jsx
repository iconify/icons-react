import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwg8tgbwc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwg8tgbwc"/>`,
		"fallback": "selfhst:wattbox-light",
	});
}

export default Component;
