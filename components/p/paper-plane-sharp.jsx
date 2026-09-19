import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-6qv12tf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-6qv12tf"/>`,
		"fallback": "ion:paper-plane-sharp",
	});
}

export default Component;
