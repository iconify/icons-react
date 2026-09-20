import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_-4ib5o.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_-4ib5o"/>`,
		"fallback": "wpf:record",
	});
}

export default Component;
