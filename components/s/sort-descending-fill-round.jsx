import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tywym2n_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tywym2n_w"/>`,
		"fallback": "coolicons:sort-descending-fill-round",
	});
}

export default Component;
