import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-fj8dbjr.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-fj8dbjr"/>`,
		"fallback": "jam:volume-mute-circle-f",
	});
}

export default Component;
