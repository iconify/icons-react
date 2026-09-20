import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9wi6kl_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9wi6kl_c"/>`,
		"fallback": "tabler:number-17-small",
	});
}

export default Component;
