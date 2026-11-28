import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1kcf2va.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1kcf2va"/>`,
		"fallback": "noviair-light:user-question",
	});
}

export default Component;
