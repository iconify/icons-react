import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj_14pclx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qj_14pclx"/>`,
		"fallback": "si:shield-bad-fill",
	});
}

export default Component;
