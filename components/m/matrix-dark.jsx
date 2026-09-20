import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf81h_pns.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf81h_pns"/>`,
		"fallback": "thesvg-color:matrix-dark",
	});
}

export default Component;
