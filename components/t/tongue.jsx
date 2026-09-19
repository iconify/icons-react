import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zojk7bbfv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zojk7bbfv"/>`,
		"fallback": "game-icons:tongue",
	});
}

export default Component;
