import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aewy_8bgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aewy_8bgg"/>`,
		"fallback": "keyline-icons:messages",
	});
}

export default Component;
