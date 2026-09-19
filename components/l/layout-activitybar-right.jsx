import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpik4gbiu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpik4gbiu"/>`,
		"fallback": "codicon:layout-activitybar-right",
	});
}

export default Component;
