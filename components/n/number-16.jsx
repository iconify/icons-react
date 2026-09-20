import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na-pm8via.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na-pm8via"/>`,
		"fallback": "octicon:number-16",
	});
}

export default Component;
