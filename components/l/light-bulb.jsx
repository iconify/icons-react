import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oho2e76vt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oho2e76vt"/>`,
		"fallback": "stash:light-bulb",
	});
}

export default Component;
