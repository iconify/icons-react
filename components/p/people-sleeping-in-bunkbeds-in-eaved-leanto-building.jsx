import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikgh70cpz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikgh70cpz"/>`,
		"fallback": "pinhead:people-sleeping-in-bunkbeds-in-eaved-leanto-building",
	});
}

export default Component;
