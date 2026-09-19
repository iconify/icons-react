import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwg57p2gj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwg57p2gj"/>`,
		"fallback": "heroicons:pause-16-solid",
	});
}

export default Component;
