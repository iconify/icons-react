import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6am9pbtw.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6am9pbtw"/>`,
		"fallback": "fa6-solid:person-digging",
	});
}

export default Component;
