import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td0cymtxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td0cymtxe"/>`,
		"fallback": "ri:list-settings-line",
	});
}

export default Component;
