import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg3p42byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg3p42byb"/>`,
		"fallback": "coolicons:letter-j-fill-round",
	});
}

export default Component;
