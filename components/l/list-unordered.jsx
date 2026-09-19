import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkgq6cbks.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkgq6cbks"/>`,
		"fallback": "at-icons:list-unordered",
	});
}

export default Component;
