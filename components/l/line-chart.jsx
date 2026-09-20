import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gegu87b2j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gegu87b2j"/>`,
		"fallback": "oui:line-chart",
	});
}

export default Component;
