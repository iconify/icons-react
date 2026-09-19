import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pknoky-nc.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pknoky-nc"/>`,
		"fallback": "fa-solid:tachometer-alt",
	});
}

export default Component;
