import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv0b-4b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv0b-4b-e"/>`,
		"fallback": "keyline-icons:phone-incoming",
	});
}

export default Component;
