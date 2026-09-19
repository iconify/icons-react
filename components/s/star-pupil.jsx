import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puvkz5bry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puvkz5bry"/>`,
		"fallback": "game-icons:star-pupil",
	});
}

export default Component;
