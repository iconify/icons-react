import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6sho1bhy.css';
import '../../css/l/lhu4h4qes.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6sho1bhy"/><path class="lhu4h4qes"/>`,
		"fallback": "carbon:purchase",
	});
}

export default Component;
