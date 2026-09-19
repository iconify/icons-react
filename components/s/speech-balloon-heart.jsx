import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbtcz_bmm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbtcz_bmm"/>`,
		"fallback": "dinkie-icons:speech-balloon-heart",
	});
}

export default Component;
