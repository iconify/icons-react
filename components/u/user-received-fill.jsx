import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggf2lacfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggf2lacfy"/>`,
		"fallback": "ri:user-received-fill",
	});
}

export default Component;
