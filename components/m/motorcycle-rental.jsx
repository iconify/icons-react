import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xobd5gbpw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xobd5gbpw"/>`,
		"fallback": "temaki:motorcycle-rental",
	});
}

export default Component;
