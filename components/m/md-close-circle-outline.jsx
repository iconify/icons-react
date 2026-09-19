import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow83bgbqz.css';
import '../../css/v/vg49bdvkf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow83bgbqz"/><path class="vg49bdvkf"/>`,
		"fallback": "ion:md-close-circle-outline",
	});
}

export default Component;
