import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqoeek4zw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqoeek4zw"/>`,
		"fallback": "cbi:pendantlong",
	});
}

export default Component;
