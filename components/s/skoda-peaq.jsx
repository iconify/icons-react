import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay1d6pr1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay1d6pr1g"/>`,
		"fallback": "cbi:skoda-peaq",
	});
}

export default Component;
