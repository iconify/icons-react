import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twe8hgzxm.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twe8hgzxm"/>`,
		"fallback": "fa-solid:signal-slash",
	});
}

export default Component;
