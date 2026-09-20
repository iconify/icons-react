import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avd0btb0l.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avd0btb0l"/>`,
		"fallback": "jam:trash",
	});
}

export default Component;
