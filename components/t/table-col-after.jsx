import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq36f3btg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq36f3btg"/>`,
		"fallback": "jam:table-col-after",
	});
}

export default Component;
