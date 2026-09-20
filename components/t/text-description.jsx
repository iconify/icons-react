import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqfv4kcrf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oqfv4kcrf"/>`,
		"fallback": "pajamas:text-description",
	});
}

export default Component;
