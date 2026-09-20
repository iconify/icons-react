import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htane7bpi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htane7bpi"/>`,
		"fallback": "teenyicons:stamp-outline",
	});
}

export default Component;
