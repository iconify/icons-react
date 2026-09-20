import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olgl6e1tn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olgl6e1tn"/>`,
		"fallback": "lineicons:loom",
	});
}

export default Component;
