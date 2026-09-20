import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9a21gb4v.css';
import '../../css/y/y5y8shbyt.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9a21gb4v"/><path class="y5y8shbyt"/>`,
		"fallback": "medical-icon:waiting-area",
	});
}

export default Component;
