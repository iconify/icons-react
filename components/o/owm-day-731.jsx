import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf8yx3bhw.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf8yx3bhw"/>`,
		"fallback": "wi:owm-day-731",
	});
}

export default Component;
