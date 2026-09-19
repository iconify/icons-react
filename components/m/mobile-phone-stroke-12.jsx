import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0tmkpb-w.css';
import '../../css/u/u_fqzdbrt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="g0tmkpb-w"/><path class="u_fqzdbrt"/>`,
		"fallback": "garden:mobile-phone-stroke-12",
	});
}

export default Component;
