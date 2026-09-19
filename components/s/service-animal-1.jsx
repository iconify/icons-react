import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axvwcsbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axvwcsbqi"/>`,
		"fallback": "guidance:service-animal-1",
	});
}

export default Component;
