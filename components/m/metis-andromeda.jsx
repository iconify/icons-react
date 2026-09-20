import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr1jnvb_y.css';
import '../../css/u/umd4-qbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr1jnvb_y"/><path class="umd4-qbsh"/>`,
		"fallback": "token:metis-andromeda",
	});
}

export default Component;
