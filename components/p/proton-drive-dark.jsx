import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieqwf_b3i.css';
import '../../css/t/t6qum7bna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieqwf_b3i"/><path class="t6qum7bna"/>`,
		"fallback": "selfhst:proton-drive-dark",
	});
}

export default Component;
