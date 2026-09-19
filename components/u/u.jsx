import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huqq55bvt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="huqq55bvt"/>`,
		"fallback": "healthicons:u",
	});
}

export default Component;
