import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh1x06b0z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh1x06b0z"/>`,
		"fallback": "streamline-block:other-ui-wi-fi-off",
	});
}

export default Component;
