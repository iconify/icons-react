import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2sotnbqu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2sotnbqu"/>`,
		"fallback": "famicons:rainy-sharp",
	});
}

export default Component;
