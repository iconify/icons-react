import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg42y0jtv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg42y0jtv"/>`,
		"fallback": "ooui:table-move-column-after-ltr",
	});
}

export default Component;
