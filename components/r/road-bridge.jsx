import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj9vw7x9f.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj9vw7x9f"/>`,
		"fallback": "fa6-solid:road-bridge",
	});
}

export default Component;
