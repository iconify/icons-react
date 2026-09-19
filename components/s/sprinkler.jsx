import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfgfls12i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfgfls12i"/>`,
		"fallback": "cbi:sprinkler",
	});
}

export default Component;
