import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aytm96b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aytm96b7g"/>`,
		"fallback": "mdi:pot-steam-outline",
	});
}

export default Component;
