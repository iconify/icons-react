import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqekb_bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqekb_bpo"/>`,
		"fallback": "coolicons:rainbow-round",
	});
}

export default Component;
