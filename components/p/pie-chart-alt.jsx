import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9-r9rubz.css';
import '../../css/e/e451rm0tl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9-r9rubz"/><path class="e451rm0tl"/>`,
		"fallback": "boxicons:pie-chart-alt",
	});
}

export default Component;
