import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkwmvhbka.css';
import '../../css/s/srpd8uwce.css';
import '../../css/y/yqx_j8uyx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkwmvhbka"/><path class="srpd8uwce"/><path class="yqx_j8uyx"/>`,
		"fallback": "streamline-pixel:logo-twitter",
	});
}

export default Component;
