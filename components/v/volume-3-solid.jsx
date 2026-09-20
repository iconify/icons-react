import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut-ddebui.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut-ddebui"/>`,
		"fallback": "teenyicons:volume-3-solid",
	});
}

export default Component;
