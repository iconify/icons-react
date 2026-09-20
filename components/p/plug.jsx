import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfiz71bix.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfiz71bix"/>`,
		"fallback": "jam:plug",
	});
}

export default Component;
