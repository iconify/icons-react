import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gheq95bra.css';
import '../../css/x/xk9zeubkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gheq95bra"/><path class="xk9zeubkp"/>`,
		"fallback": "eva:settings-2-outline",
	});
}

export default Component;
