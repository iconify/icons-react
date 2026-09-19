import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooipf_b_w.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooipf_b_w"/>`,
		"fallback": "websymbol:vimeo-rect",
	});
}

export default Component;
