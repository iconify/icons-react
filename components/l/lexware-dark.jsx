import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv3vadc1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv3vadc1c"/>`,
		"fallback": "selfhst:lexware-dark",
	});
}

export default Component;
