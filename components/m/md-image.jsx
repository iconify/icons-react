import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pijkw5bll.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pijkw5bll"/>`,
		"fallback": "ion:md-image",
	});
}

export default Component;
