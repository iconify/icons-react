import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtoomg9sp.css';
import '../../css/a/accmcc7bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xtoomg9sp"/><path class="accmcc7bf"/>`,
		"fallback": "solar:outgoing-call-outline",
	});
}

export default Component;
