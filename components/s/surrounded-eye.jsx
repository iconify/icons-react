import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkjh_uz7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkjh_uz7x"/>`,
		"fallback": "game-icons:surrounded-eye",
	});
}

export default Component;
