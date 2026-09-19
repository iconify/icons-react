import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggdnmsb6p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggdnmsb6p"/>`,
		"fallback": "fa6-brands:pix",
	});
}

export default Component;
