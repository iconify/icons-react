import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2b4uobtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n2b4uobtl"/>`,
		"fallback": "reicon:text-x-square-filled",
	});
}

export default Component;
