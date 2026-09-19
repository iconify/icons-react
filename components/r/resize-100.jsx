import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2-mbfr7w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2-mbfr7w"/>`,
		"fallback": "entypo:resize-100",
	});
}

export default Component;
