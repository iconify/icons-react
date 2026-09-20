import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxpexwnur.css';
import '../../css/r/rpjhj7j4a.css';

const viewBox = {"width":152,"height":152};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxpexwnur"/><path class="rpjhj7j4a"/>`,
		"fallback": "thesvg-color:todoist",
	});
}

export default Component;
