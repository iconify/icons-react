import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u65_98btr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u65_98btr"/>`,
		"fallback": "pinhead:motorcycle-and-arrow-right-above-arrow-left",
	});
}

export default Component;
