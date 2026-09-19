import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yihu4wbqk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yihu4wbqk"/>`,
		"fallback": "game-icons:sea-serpent",
	});
}

export default Component;
