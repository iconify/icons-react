import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox92i9e_f.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox92i9e_f"/>`,
		"fallback": "el:refresh",
	});
}

export default Component;
