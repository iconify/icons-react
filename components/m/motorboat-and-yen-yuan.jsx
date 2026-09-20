import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nye_yhbsn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nye_yhbsn"/>`,
		"fallback": "pinhead:motorboat-and-yen-yuan",
	});
}

export default Component;
