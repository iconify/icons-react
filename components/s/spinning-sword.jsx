import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp11r-b8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp11r-b8g"/>`,
		"fallback": "game-icons:spinning-sword",
	});
}

export default Component;
