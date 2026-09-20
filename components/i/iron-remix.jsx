import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2sowqb4u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e2sowqb4u"/>`,
		"fallback": "streamline-flex:iron-remix",
	});
}

export default Component;
