import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex-nqdb7d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex-nqdb7d"/>`,
		"fallback": "teenyicons:thumb-down-outline",
	});
}

export default Component;
