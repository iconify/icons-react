import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzxtc-bwd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzxtc-bwd"/>`,
		"fallback": "bi:stoplights-fill",
	});
}

export default Component;
