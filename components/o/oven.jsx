import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw5nfdb1w.css';
import '../../css/a/ap19vnbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw5nfdb1w"/><path class="ap19vnbrf"/>`,
		"fallback": "boxicons:oven",
	});
}

export default Component;
