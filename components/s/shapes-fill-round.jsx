import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lka41ng8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lka41ng8b"/>`,
		"fallback": "coolicons:shapes-fill-round",
	});
}

export default Component;
