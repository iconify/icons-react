import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spax5iber.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spax5iber"/>`,
		"fallback": "heroicons:variable-16-solid",
	});
}

export default Component;
