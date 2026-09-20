import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lql2hob3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lql2hob3v"/>`,
		"fallback": "reicon:scooter2",
	});
}

export default Component;
