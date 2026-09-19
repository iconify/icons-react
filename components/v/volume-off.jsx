import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg_826mby.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg_826mby"/>`,
		"fallback": "fa7-solid:volume-off",
	});
}

export default Component;
