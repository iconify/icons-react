import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv0oiobzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv0oiobzm"/>`,
		"fallback": "token:kraken",
	});
}

export default Component;
