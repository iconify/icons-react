import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrgssux7f.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrgssux7f"/>`,
		"fallback": "medical-icon:surgery",
	});
}

export default Component;
