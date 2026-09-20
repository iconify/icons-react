import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3qeq8b8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j3qeq8b8c"/>`,
		"fallback": "reicon:tea-cup-filled",
	});
}

export default Component;
