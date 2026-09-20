import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv0p_bjuj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv0p_bjuj"/>`,
		"fallback": "streamline-block:other-ui-color-picker",
	});
}

export default Component;
