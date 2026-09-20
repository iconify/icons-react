import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebc7d1mqz.css';
import '../../css/j/j4kat4bzg.css';
import '../../css/o/oh9bdxpde.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebc7d1mqz"/><path class="j4kat4bzg"/><path class="oh9bdxpde"/>`,
		"fallback": "streamline-pixel:shopping-shipping-loading-box",
	});
}

export default Component;
