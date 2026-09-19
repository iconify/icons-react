import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l42-2yu0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l42-2yu0s"/>`,
		"fallback": "iconamoon:link-external-thin",
	});
}

export default Component;
