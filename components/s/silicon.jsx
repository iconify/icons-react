import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl3zvd-ae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl3zvd-ae"/>`,
		"fallback": "token:silicon",
	});
}

export default Component;
