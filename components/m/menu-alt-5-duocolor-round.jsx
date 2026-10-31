import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0jnlgbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0jnlgbfq"/>`,
		"fallback": "coolicons:menu-alt-5-duocolor-round",
	});
}

export default Component;
