import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecr8r-six.css';
import '../../css/i/ibldiexph.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecr8r-six"/><path class="ibldiexph"/>`,
		"fallback": "streamline-pixel:shopping-shipping-box",
	});
}

export default Component;
