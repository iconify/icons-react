import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qyyoq8bgz.css';
import '../../css/g/go3ojebxo.css';
import '../../css/a/abasntp2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qyyoq8bgz"/><path class="go3ojebxo wm-a"/><path class="abasntp2y"/></g>`,
		"fallback": "withicons:sd-card-duo",
	});
}

export default Component;
