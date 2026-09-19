import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4egcmb2x.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m4egcmb2x"/>`,
		"fallback": "cuida:unfold-vertical-outline",
	});
}

export default Component;
