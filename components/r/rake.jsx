import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zctceji2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zctceji2k"/>`,
		"fallback": "game-icons:rake",
	});
}

export default Component;
