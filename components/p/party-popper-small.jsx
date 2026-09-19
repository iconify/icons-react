import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at_li1b0i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at_li1b0i"/>`,
		"fallback": "dinkie-icons:party-popper-small",
	});
}

export default Component;
