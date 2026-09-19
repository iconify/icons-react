import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq2n3-29f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq2n3-29f"/>`,
		"fallback": "carbon:load-balancer-application",
	});
}

export default Component;
