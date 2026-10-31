import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywldplb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywldplb5p"/>`,
		"fallback": "coolicons:letter-h-duocolor-round",
	});
}

export default Component;
