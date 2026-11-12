import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie4m0gn1g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie4m0gn1g"/>`,
		"fallback": "selfhst:wavelog-dark",
	});
}

export default Component;
