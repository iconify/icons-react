import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqng2lb4e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqng2lb4e"/>`,
		"fallback": "temaki:transit-shelter",
	});
}

export default Component;
