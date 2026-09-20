import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjmcl9b0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjmcl9b0e"/>`,
		"fallback": "keyline-icons:share-2-sharp-fill",
	});
}

export default Component;
