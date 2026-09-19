import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocsj0ygwj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ocsj0ygwj"/>`,
		"fallback": "gravity-ui:objects-align-center-horizontal",
	});
}

export default Component;
