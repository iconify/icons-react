import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrj54obkf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrj54obkf"/>`,
		"fallback": "uiw:star-on",
	});
}

export default Component;
