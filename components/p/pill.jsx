import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icg1szbyo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icg1szbyo"/>`,
		"fallback": "at-icons:pill",
	});
}

export default Component;
