import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qph8x2k9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qph8x2k9c"/>`,
		"fallback": "ci:puzzle",
	});
}

export default Component;
