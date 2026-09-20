import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyrsscxbi.css';
import '../../css/p/pha2jnncv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyrsscxbi"/><path class="pha2jnncv"/>`,
		"fallback": "token:insur",
	});
}

export default Component;
