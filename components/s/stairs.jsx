import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrp_lrcsr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrp_lrcsr"/>`,
		"fallback": "fa7-solid:stairs",
	});
}

export default Component;
