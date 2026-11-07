import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnytd9b5z.css';
import '../../css/k/kgc_53bqg.css';
import '../../css/u/ux7dfvzra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnytd9b5z"/><path class="kgc_53bqg"/><path class="ux7dfvzra"/>`,
		"fallback": "solar:routing-3-bold",
	});
}

export default Component;
