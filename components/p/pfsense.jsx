import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc_1nqb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc_1nqb8d"/>`,
		"fallback": "simple-icons:pfsense",
	});
}

export default Component;
