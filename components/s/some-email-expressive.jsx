import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz6ow9y5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fz6ow9y5n"/>`,
		"fallback": "nrk:some-email-expressive",
	});
}

export default Component;
