import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu9p88b8k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu9p88b8k"/>`,
		"fallback": "selfhst:interlock-dark",
	});
}

export default Component;
