import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id-0tgb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="id-0tgb0z"/>`,
		"fallback": "nrk:user-notloggedin-active",
	});
}

export default Component;
