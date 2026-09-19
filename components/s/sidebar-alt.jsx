import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg3qi_knx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cg3qi_knx"/>`,
		"fallback": "griddy-icons:sidebar-alt",
	});
}

export default Component;
