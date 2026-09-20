import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcoh9zb5r.css';
import '../../css/b/bve8ubjqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcoh9zb5r"/><path class="bve8ubjqx"/>`,
		"fallback": "token:pwr",
	});
}

export default Component;
