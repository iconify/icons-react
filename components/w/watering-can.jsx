import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzvh-ba9a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzvh-ba9a"/>`,
		"fallback": "game-icons:watering-can",
	});
}

export default Component;
