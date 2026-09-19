import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfhx01_3w.css';
import '../../css/l/lwt2_3bbg.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfhx01_3w"/><path class="lwt2_3bbg"/>`,
		"fallback": "formkit:people",
	});
}

export default Component;
