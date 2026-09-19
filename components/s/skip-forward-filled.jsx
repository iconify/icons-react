import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf-hs-btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wf-hs-btq"/>`,
		"fallback": "griddy-icons:skip-forward-filled",
	});
}

export default Component;
