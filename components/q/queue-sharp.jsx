import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qisoki36y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qisoki36y"/>`,
		"fallback": "keyline-icons:queue-sharp",
	});
}

export default Component;
