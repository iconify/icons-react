import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad4la_mph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad4la_mph"/>`,
		"fallback": "meteor-icons:rocket",
	});
}

export default Component;
