import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr--kk2qu.css';
import '../../css/q/q4g6dlonh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rr--kk2qu"/><path class="q4g6dlonh"/>`,
		"fallback": "teenyicons:paintbucket-solid",
	});
}

export default Component;
