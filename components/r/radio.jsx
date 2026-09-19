import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3noic1wk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3noic1wk"/>`,
		"fallback": "fa6-solid:radio",
	});
}

export default Component;
