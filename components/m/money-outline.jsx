import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di7af1s5a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di7af1s5a"/>`,
		"fallback": "teenyicons:money-outline",
	});
}

export default Component;
