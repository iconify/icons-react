import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy8ud43tn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy8ud43tn"/>`,
		"fallback": "bi:text-wrap",
	});
}

export default Component;
