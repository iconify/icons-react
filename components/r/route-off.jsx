import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqo7pybtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqo7pybtc"/>`,
		"fallback": "vadivam:route-off",
	});
}

export default Component;
