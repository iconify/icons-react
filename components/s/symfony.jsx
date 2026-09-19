import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgl48qxhi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgl48qxhi"/>`,
		"fallback": "fa6-brands:symfony",
	});
}

export default Component;
