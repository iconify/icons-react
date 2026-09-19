import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxboyjbua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mxboyjbua"/>`,
		"fallback": "healthicons:pills-2",
	});
}

export default Component;
