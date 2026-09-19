import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvaaipbio.css';
import '../../css/v/v6qkiubvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvaaipbio"/><path class="v6qkiubvb"/>`,
		"fallback": "boxicons:qr-scan",
	});
}

export default Component;
