import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnwb_mbvo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnwb_mbvo"/>`,
		"fallback": "pinhead:person-playing-soccer",
	});
}

export default Component;
