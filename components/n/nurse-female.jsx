import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz-3-qpad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz-3-qpad"/>`,
		"fallback": "game-icons:nurse-female",
	});
}

export default Component;
