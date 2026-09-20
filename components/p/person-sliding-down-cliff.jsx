import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-zbukb-x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-zbukb-x"/>`,
		"fallback": "pinhead:person-sliding-down-cliff",
	});
}

export default Component;
