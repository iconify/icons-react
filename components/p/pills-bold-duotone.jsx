import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9h5fmbqx.css';
import '../../css/h/hsjczmubo.css';
import '../../css/x/x5yc8ybio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y9h5fmbqx"/><path class="hsjczmubo"/><path class="x5yc8ybio"/>`,
		"fallback": "solar:pills-bold-duotone",
	});
}

export default Component;
