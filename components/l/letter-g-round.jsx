import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgpg_wbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgpg_wbqj"/>`,
		"fallback": "coolicons:letter-g-round",
	});
}

export default Component;
