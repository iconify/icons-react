import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8zp29bao.css';
import '../../css/d/dfctlpbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8zp29bao"/><path class="dfctlpbtz"/>`,
		"fallback": "boxicons:mask",
	});
}

export default Component;
