import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuhezrb5q.css';
import '../../css/r/rjngqpptk.css';
import '../../css/u/uhmb74z0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuhezrb5q"/><circle class="rjngqpptk"/><path class="uhmb74z0e"/>`,
		"fallback": "eos-icons:product-classes",
	});
}

export default Component;
