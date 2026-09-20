import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgg_olbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgg_olbyx"/>`,
		"fallback": "keyline-icons:podium-1",
	});
}

export default Component;
