import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn09w3stf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn09w3stf"/>`,
		"fallback": "boxicons:siren-alt",
	});
}

export default Component;
