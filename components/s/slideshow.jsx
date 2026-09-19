import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryrdczeve.css';
import '../../css/h/hsnx_9cta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer ryrdczeve"/><path class="duoicon-primary-layer hsnx_9cta"/>`,
		"fallback": "duo-icons:slideshow",
	});
}

export default Component;
