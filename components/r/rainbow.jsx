import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4x4tbcrq.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4x4tbcrq"/>`,
		"fallback": "fa6-solid:rainbow",
	});
}

export default Component;
