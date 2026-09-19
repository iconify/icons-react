import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8wtggbuj.css';
import '../../css/r/r7cq4bfcx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8wtggbuj"/><path class="r7cq4bfcx"/>`,
		"fallback": "carbon:traffic-incident",
	});
}

export default Component;
