import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eninhbc6s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eninhbc6s"/>`,
		"fallback": "pinhead:mobile-phone-with-touchscreen-and-antenna-and-wifi",
	});
}

export default Component;
