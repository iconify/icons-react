import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oukk7ab7a.css';

const viewBox = {"width":13,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oukk7ab7a"/>`,
		"fallback": "octicon:kebab-horizontal",
	});
}

export default Component;
