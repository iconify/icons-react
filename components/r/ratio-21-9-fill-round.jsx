import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq1ge0_ym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq1ge0_ym"/>`,
		"fallback": "coolicons:ratio-21-9-fill-round",
	});
}

export default Component;
