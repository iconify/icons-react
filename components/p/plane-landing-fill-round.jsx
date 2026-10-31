import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faf-8419w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faf-8419w"/>`,
		"fallback": "coolicons:plane-landing-fill-round",
	});
}

export default Component;
