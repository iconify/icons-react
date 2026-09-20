import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny0sn3mdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ny0sn3mdp"/>`,
		"fallback": "majesticons:megaphone",
	});
}

export default Component;
