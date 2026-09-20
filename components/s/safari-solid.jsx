import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw6hy-k3l.css';
import '../../css/q/q7cxp6bkk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw6hy-k3l"/><path clip-rule="evenodd" class="q7cxp6bkk"/>`,
		"fallback": "teenyicons:safari-solid",
	});
}

export default Component;
