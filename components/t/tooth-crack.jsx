import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2brq2b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s2brq2b0n"/>`,
		"fallback": "griddy-icons:tooth-crack",
	});
}

export default Component;
