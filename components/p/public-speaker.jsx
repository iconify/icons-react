import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byx7xvb9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byx7xvb9o"/>`,
		"fallback": "game-icons:public-speaker",
	});
}

export default Component;
