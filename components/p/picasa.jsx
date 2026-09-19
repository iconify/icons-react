import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq_93fakz.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq_93fakz"/>`,
		"fallback": "el:picasa",
	});
}

export default Component;
