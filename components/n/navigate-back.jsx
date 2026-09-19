import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb4ip3btx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb4ip3btx"/>`,
		"fallback": "fluent-mdl2:navigate-back",
	});
}

export default Component;
