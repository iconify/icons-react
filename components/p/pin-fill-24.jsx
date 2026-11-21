import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5kl9907t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5kl9907t"/>`,
		"fallback": "octicon:pin-fill-24",
	});
}

export default Component;
