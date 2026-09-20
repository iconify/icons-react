import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz-1x0bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz-1x0bdp"/>`,
		"fallback": "simple-icons:jrgroup",
	});
}

export default Component;
