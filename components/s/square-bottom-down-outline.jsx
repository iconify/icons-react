import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3cwxfump.css';
import '../../css/k/ksuq6mb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3cwxfump"/><path class="ksuq6mb5j"/>`,
		"fallback": "solar:square-bottom-down-outline",
	});
}

export default Component;
