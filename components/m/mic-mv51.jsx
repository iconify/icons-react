import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa74gusld.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa74gusld"/>`,
		"fallback": "dinkie-icons:mic-mv51",
	});
}

export default Component;
