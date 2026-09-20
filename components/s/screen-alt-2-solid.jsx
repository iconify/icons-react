import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfpc-lb3z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nfpc-lb3z"/>`,
		"fallback": "teenyicons:screen-alt-2-solid",
	});
}

export default Component;
