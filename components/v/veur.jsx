import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm8mg3bjf.css';
import '../../css/o/o4nmjxj6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm8mg3bjf"/><path class="o4nmjxj6z"/>`,
		"fallback": "token:veur",
	});
}

export default Component;
