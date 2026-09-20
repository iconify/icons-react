import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkkupx0gu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkkupx0gu"/>`,
		"fallback": "selfhst:tangerine-ui-dark",
	});
}

export default Component;
