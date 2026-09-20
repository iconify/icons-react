import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc5a15b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bc5a15b-o"/>`,
		"fallback": "reicon:planet",
	});
}

export default Component;
