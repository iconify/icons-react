import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkyw1x0bs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkyw1x0bs"/>`,
		"fallback": "game-icons:south-africa-flag",
	});
}

export default Component;
