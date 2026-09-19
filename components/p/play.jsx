import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlfm0esoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlfm0esoe"/>`,
		"fallback": "guidance:play",
	});
}

export default Component;
