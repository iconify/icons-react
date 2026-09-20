import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azaf2ubzu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azaf2ubzu"/>`,
		"fallback": "map:subway-station",
	});
}

export default Component;
