import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icny9nbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icny9nbbd"/>`,
		"fallback": "keyline-icons:table",
	});
}

export default Component;
