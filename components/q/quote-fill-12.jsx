import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-rtspsnc.css';
import '../../css/o/owdlqbbrs.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-rtspsnc"/><path class="owdlqbbrs"/>`,
		"fallback": "garden:quote-fill-12",
	});
}

export default Component;
