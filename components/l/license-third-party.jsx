import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiwjo4boz.css';
import '../../css/d/dt0zo1djr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiwjo4boz"/><path class="dt0zo1djr"/>`,
		"fallback": "carbon:license-third-party",
	});
}

export default Component;
