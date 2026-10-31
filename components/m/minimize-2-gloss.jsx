import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvq7y5bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvq7y5bvp"/>`,
		"fallback": "withicons:minimize-2-gloss",
	});
}

export default Component;
