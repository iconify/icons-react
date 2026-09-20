import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbw7r3bce.css';
import '../../css/t/tcu8_9yus.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbw7r3bce"/><path clip-rule="evenodd" class="tcu8_9yus"/>`,
		"fallback": "thesvg-color:jinritoutiao",
	});
}

export default Component;
