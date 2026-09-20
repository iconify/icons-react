import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb75cm3nn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb75cm3nn"/>`,
		"fallback": "octicon:report-16",
	});
}

export default Component;
