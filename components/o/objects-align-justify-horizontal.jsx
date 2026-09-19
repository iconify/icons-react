import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h36_oubov.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h36_oubov"/>`,
		"fallback": "gravity-ui:objects-align-justify-horizontal",
	});
}

export default Component;
