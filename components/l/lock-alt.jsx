import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq40seb1a.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq40seb1a"/>`,
		"fallback": "el:lock-alt",
	});
}

export default Component;
