import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av8jq-b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av8jq-b2u"/>`,
		"fallback": "mdi:toy-brick-search",
	});
}

export default Component;
