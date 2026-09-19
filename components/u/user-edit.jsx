import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rryi5hbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rryi5hbib"/>`,
		"fallback": "griddy-icons:user-edit",
	});
}

export default Component;
