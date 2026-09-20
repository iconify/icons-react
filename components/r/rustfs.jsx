import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3x4b222t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3x4b222t"/>`,
		"fallback": "selfhst:rustfs",
	});
}

export default Component;
