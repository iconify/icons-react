import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl5v1rsmq.css';
import '../../css/v/v9rv_hbmi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl5v1rsmq"/><path class="v9rv_hbmi"/>`,
		"fallback": "garden:key-stroke-20",
	});
}

export default Component;
