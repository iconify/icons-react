import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgu0890lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bgu0890lw"/>`,
		"fallback": "gg:pentagon-bottom-right",
	});
}

export default Component;
