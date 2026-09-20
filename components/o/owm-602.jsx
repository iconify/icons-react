import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_-leybfn.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_-leybfn"/>`,
		"fallback": "wi:owm-602",
	});
}

export default Component;
