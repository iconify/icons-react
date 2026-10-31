import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti0u3_bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti0u3_bht"/>`,
		"fallback": "coolicons:shield-help-round",
	});
}

export default Component;
