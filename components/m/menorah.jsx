import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mde7xldux.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mde7xldux"/>`,
		"fallback": "fa6-solid:menorah",
	});
}

export default Component;
