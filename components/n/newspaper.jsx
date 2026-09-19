import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj__e9nfu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj__e9nfu"/>`,
		"fallback": "fa7-solid:newspaper",
	});
}

export default Component;
