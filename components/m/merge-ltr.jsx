import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxsq5cb_w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxsq5cb_w"/>`,
		"fallback": "ooui:merge-ltr",
	});
}

export default Component;
