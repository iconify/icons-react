import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u22te8bvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u22te8bvm"/>`,
		"fallback": "selfhst:omnipoly",
	});
}

export default Component;
