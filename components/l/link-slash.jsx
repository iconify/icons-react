import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twtwy1b8p.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twtwy1b8p"/>`,
		"fallback": "fa6-solid:link-slash",
	});
}

export default Component;
