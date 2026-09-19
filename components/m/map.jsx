import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnapf6o7v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnapf6o7v"/>`,
		"fallback": "fa7-regular:map",
	});
}

export default Component;
