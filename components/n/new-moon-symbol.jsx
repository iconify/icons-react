import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7vjk7b3w.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7vjk7b3w"/>`,
		"fallback": "dinkie-icons:new-moon-symbol",
	});
}

export default Component;
