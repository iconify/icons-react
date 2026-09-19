import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gevucybyd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gevucybyd"/>`,
		"fallback": "game-icons:vines",
	});
}

export default Component;
