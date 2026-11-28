import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lggoazb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lggoazb5i"/>`,
		"fallback": "iconaut:message-square-share-solid",
	});
}

export default Component;
