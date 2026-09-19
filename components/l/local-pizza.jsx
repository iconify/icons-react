import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuzej1iwl.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuzej1iwl"/>`,
		"fallback": "zmdi:local-pizza",
	});
}

export default Component;
