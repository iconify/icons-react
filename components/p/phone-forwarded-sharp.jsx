import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvw0wvilq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvw0wvilq"/>`,
		"fallback": "keyline-icons:phone-forwarded-sharp",
	});
}

export default Component;
