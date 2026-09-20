import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meh55mbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meh55mbkl"/>`,
		"fallback": "tabler:screen-share-off",
	});
}

export default Component;
