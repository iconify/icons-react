import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od15vrbxv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od15vrbxv"/>`,
		"fallback": "roentgen:rocket-flying",
	});
}

export default Component;
