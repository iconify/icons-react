import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjde_6bez.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjde_6bez"/>`,
		"fallback": "game-icons:trail",
	});
}

export default Component;
