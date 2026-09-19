import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru2o9bykq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru2o9bykq"/>`,
		"fallback": "game-icons:moebius-trefoil",
	});
}

export default Component;
