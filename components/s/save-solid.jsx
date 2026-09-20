import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh06ukb7c.css';
import '../../css/c/c3i4qtosu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh06ukb7c"/><path class="c3i4qtosu"/>`,
		"fallback": "teenyicons:save-solid",
	});
}

export default Component;
