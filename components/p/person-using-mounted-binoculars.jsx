import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e29om5blv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e29om5blv"/>`,
		"fallback": "pinhead:person-using-mounted-binoculars",
	});
}

export default Component;
