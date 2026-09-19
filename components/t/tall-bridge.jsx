import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl__lrbqj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl__lrbqj"/>`,
		"fallback": "game-icons:tall-bridge",
	});
}

export default Component;
