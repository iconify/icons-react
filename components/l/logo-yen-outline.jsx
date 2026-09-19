import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4b5wgb8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4b5wgb8p"/>`,
		"fallback": "ion:logo-yen-outline",
	});
}

export default Component;
