import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae_s_snbl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae_s_snbl"/>`,
		"fallback": "carbon:load-balancer-global",
	});
}

export default Component;
