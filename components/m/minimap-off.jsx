import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-cc_5bhw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-cc_5bhw"/>`,
		"fallback": "carbon:minimap-off",
	});
}

export default Component;
