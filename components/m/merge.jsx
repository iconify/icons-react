import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj9qr-p4w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj9qr-p4w"/>`,
		"fallback": "oui:merge",
	});
}

export default Component;
