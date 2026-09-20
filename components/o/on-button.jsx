import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0flwka0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0flwka0d"/>`,
		"fallback": "lets-icons:on-button",
	});
}

export default Component;
