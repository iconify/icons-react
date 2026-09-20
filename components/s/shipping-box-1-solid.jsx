import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs6u6nthp.css';
import '../../css/q/q2g4c5bfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hs6u6nthp"/><path class="q2g4c5bfj"/>`,
		"fallback": "streamline-plump:shipping-box-1-solid",
	});
}

export default Component;
