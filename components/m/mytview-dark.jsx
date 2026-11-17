import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4wa7qbcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4wa7qbcg"/>`,
		"fallback": "selfhst:mytview-dark",
	});
}

export default Component;
