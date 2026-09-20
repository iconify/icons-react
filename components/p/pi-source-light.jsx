import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffz5o973p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffz5o973p"/>`,
		"fallback": "selfhst:pi-source-light",
	});
}

export default Component;
