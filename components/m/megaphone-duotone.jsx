import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwuzebcck.css';
import '../../css/e/ey9o68b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwuzebcck"/><path class="ey9o68b2p"/>`,
		"fallback": "stash:megaphone-duotone",
	});
}

export default Component;
