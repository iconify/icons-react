import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7fum4b5a.css';
import '../../css/k/kv4jnr7fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7fum4b5a"/><path class="kv4jnr7fz"/>`,
		"fallback": "bx:shield-x",
	});
}

export default Component;
