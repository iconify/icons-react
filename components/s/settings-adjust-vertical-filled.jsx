import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkfh-wbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lkfh-wbzt"/>`,
		"fallback": "griddy-icons:settings-adjust-vertical-filled",
	});
}

export default Component;
