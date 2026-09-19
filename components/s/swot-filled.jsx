import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edd34ccwd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edd34ccwd"/>`,
		"fallback": "carbon:swot-filled",
	});
}

export default Component;
