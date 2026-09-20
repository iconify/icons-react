import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfk9sbw9p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfk9sbw9p"/>`,
		"fallback": "ooui:table-move-row-after",
	});
}

export default Component;
