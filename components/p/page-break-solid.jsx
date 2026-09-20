import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyc56ubjg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyc56ubjg"/>`,
		"fallback": "teenyicons:page-break-solid",
	});
}

export default Component;
