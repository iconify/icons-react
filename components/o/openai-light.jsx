import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrsjxybtj.css';

const viewBox = {"width":256,"height":260};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrsjxybtj"/>`,
		"fallback": "thesvg-color:openai-light",
	});
}

export default Component;
