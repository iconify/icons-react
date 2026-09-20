import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faye_bcvv.css';
import '../../css/d/dg6f8nblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faye_bcvv"/><path clip-rule="evenodd" class="dg6f8nblg"/>`,
		"fallback": "token:metf",
	});
}

export default Component;
