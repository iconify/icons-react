import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v82socb4g.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v82socb4g"/>`,
		"fallback": "wi:thermometer-exterior",
	});
}

export default Component;
