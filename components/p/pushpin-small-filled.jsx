import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms8pr2b8c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms8pr2b8c"/>`,
		"fallback": "dinkie-icons:pushpin-small-filled",
	});
}

export default Component;
