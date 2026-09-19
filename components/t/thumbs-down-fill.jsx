import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myhk15bsx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myhk15bsx"/>`,
		"fallback": "gravity-ui:thumbs-down-fill",
	});
}

export default Component;
