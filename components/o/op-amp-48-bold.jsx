import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t85io_b9n.css';
import '../../css/y/yl9kalg0k.css';
import '../../css/f/feujplb3t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t85io_b9n"/><path class="yl9kalg0k"/><path class="feujplb3t"/>`,
		"fallback": "energy-icons:op-amp-48-bold",
	});
}

export default Component;
