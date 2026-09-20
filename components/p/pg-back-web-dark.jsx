import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujxrcqbgg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujxrcqbgg"/>`,
		"fallback": "selfhst:pg-back-web-dark",
	});
}

export default Component;
