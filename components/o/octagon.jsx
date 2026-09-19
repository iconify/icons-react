import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epp-53c7z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epp-53c7z"/>`,
		"fallback": "at-icons:octagon",
	});
}

export default Component;
