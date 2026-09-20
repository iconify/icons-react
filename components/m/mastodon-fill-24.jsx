import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v37covj8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v37covj8r"/>`,
		"fallback": "qlementine-icons:mastodon-fill-24",
	});
}

export default Component;
