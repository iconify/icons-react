import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moj687axr.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moj687axr"/>`,
		"fallback": "jam:set-backward",
	});
}

export default Component;
