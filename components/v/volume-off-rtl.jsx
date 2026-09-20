import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sydqsyb7y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sydqsyb7y"/>`,
		"fallback": "ooui:volume-off-rtl",
	});
}

export default Component;
