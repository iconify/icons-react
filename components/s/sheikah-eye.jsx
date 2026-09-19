import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zti3kgb6v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zti3kgb6v"/>`,
		"fallback": "game-icons:sheikah-eye",
	});
}

export default Component;
