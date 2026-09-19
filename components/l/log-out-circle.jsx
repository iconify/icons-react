import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asb-_0zbx.css';
import '../../css/m/m37_gnbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asb-_0zbx"/><path class="m37_gnbyv"/>`,
		"fallback": "bx:log-out-circle",
	});
}

export default Component;
