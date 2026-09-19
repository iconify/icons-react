import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojz440bfe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojz440bfe"/>`,
		"fallback": "famicons:settings-sharp",
	});
}

export default Component;
