import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcsbmibcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcsbmibcm"/>`,
		"fallback": "coolicons:menu-double-small-fill-round",
	});
}

export default Component;
