import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf4dhebff.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cf4dhebff"/>`,
		"fallback": "streamline-block:other-ui-color-palette",
	});
}

export default Component;
