import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewg_2oqwf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewg_2oqwf"/>`,
		"fallback": "fa7-solid:sign-in",
	});
}

export default Component;
