import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnl7bw4sb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mnl7bw4sb"/>`,
		"fallback": "icon-park-outline:lark",
	});
}

export default Component;
