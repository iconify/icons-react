import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn6m6h7bc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn6m6h7bc"/>`,
		"fallback": "dinkie-icons:otfeature-fwid-small-filled",
	});
}

export default Component;
