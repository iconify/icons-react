import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enie18bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="enie18bjp"/>`,
		"fallback": "lucide:rectangle-vertical",
	});
}

export default Component;
