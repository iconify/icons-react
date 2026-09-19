import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5-vi_78i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5-vi_78i"/>`,
		"fallback": "game-icons:spider-eye",
	});
}

export default Component;
