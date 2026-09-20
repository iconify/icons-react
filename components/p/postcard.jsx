import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rckfhcc4g.css';
import '../../css/u/u0awpynix.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rckfhcc4g"/><path class="u0awpynix"/>`,
		"fallback": "lineicons:postcard",
	});
}

export default Component;
