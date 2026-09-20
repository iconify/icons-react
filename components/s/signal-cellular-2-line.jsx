import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnixv7h1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnixv7h1u"/>`,
		"fallback": "ri:signal-cellular-2-line",
	});
}

export default Component;
