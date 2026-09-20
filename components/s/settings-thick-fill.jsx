import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txd6_wbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="txd6_wbca"/>`,
		"fallback": "si:settings-thick-fill",
	});
}

export default Component;
