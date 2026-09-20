import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km_efkbzu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km_efkbzu"/>`,
		"fallback": "roentgen:volcanic-cone",
	});
}

export default Component;
