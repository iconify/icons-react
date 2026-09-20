import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ali87ds_c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ali87ds_c"/>`,
		"fallback": "ooui:undo-rtl",
	});
}

export default Component;
