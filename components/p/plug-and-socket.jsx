import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-iz-12dy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-iz-12dy"/>`,
		"fallback": "at-icons:plug-and-socket",
	});
}

export default Component;
