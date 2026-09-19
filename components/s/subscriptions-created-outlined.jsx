import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-dvcfb3w.css';
import '../../css/f/fcilczb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-dvcfb3w"/><path class="fcilczb-g"/>`,
		"fallback": "eos-icons:subscriptions-created-outlined",
	});
}

export default Component;
