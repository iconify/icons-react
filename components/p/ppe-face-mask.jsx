import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvarblb7n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fvarblb7n"/>`,
		"fallback": "healthicons:ppe-face-mask",
	});
}

export default Component;
