import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbkayy0nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbkayy0nb"/>`,
		"fallback": "noviair-light:scan-face-check",
	});
}

export default Component;
