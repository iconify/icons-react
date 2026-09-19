import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmw7fe3td.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmw7fe3td"/>`,
		"fallback": "dinkie-icons:text-edit",
	});
}

export default Component;
