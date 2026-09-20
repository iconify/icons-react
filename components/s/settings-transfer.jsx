import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txc5-tbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txc5-tbpf"/>`,
		"fallback": "mdi:settings-transfer",
	});
}

export default Component;
