import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk2e_09ob.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk2e_09ob"/>`,
		"fallback": "game-icons:sverd-i-fjell",
	});
}

export default Component;
