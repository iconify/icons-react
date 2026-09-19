import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzdkvub5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzdkvub5h"/>`,
		"fallback": "cbi:roomscloset",
	});
}

export default Component;
