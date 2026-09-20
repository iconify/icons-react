import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z538v9b6p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z538v9b6p"/>`,
		"fallback": "roentgen:telescope-gamma",
	});
}

export default Component;
