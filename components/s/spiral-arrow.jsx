import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zewybsbbs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zewybsbbs"/>`,
		"fallback": "game-icons:spiral-arrow",
	});
}

export default Component;
