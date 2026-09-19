import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po4ve2bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po4ve2bco"/>`,
		"fallback": "boxicons:tent",
	});
}

export default Component;
