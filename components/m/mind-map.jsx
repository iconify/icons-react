import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nupf9xppo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nupf9xppo"/>`,
		"fallback": "ri:mind-map",
	});
}

export default Component;
