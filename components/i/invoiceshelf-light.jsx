import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddrnv4b6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddrnv4b6w"/>`,
		"fallback": "selfhst:invoiceshelf-light",
	});
}

export default Component;
