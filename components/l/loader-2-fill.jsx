import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk5tax74a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk5tax74a"/>`,
		"fallback": "ri:loader-2-fill",
	});
}

export default Component;
