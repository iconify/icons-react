import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smh9_eb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smh9_eb_c"/>`,
		"fallback": "ci:radio",
	});
}

export default Component;
