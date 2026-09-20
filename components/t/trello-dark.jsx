import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id4sdkj0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id4sdkj0f"/>`,
		"fallback": "selfhst:trello-dark",
	});
}

export default Component;
