import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bit21z5fw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bit21z5fw"/>`,
		"fallback": "icons8:unlock-2",
	});
}

export default Component;
