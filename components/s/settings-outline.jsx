import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_c0fnb5t.css';
import '../../css/x/xk9zeubkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_c0fnb5t"/><path class="xk9zeubkp"/>`,
		"fallback": "eva:settings-outline",
	});
}

export default Component;
