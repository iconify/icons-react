import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z172f6bjb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z172f6bjb"/>`,
		"fallback": "selfhst:nummo-dark",
	});
}

export default Component;
