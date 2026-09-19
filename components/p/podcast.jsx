import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aod_41bqo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aod_41bqo"/>`,
		"fallback": "fa7-solid:podcast",
	});
}

export default Component;
