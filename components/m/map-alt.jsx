import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9vnh1heq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9vnh1heq"/>`,
		"fallback": "bxs:map-alt",
	});
}

export default Component;
