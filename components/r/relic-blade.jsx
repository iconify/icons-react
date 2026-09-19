import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axk8kbb8n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axk8kbb8n"/>`,
		"fallback": "game-icons:relic-blade",
	});
}

export default Component;
