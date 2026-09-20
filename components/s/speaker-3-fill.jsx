import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwp2pllyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwp2pllyn"/>`,
		"fallback": "ri:speaker-3-fill",
	});
}

export default Component;
