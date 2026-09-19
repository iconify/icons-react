import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miihutl4c.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miihutl4c"/>`,
		"fallback": "fa-solid:kiss-beam",
	});
}

export default Component;
