import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avn7-_bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avn7-_bug"/>`,
		"fallback": "lucide:radio-off",
	});
}

export default Component;
