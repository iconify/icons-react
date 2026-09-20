import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay2sl4w9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay2sl4w9l"/>`,
		"fallback": "tabler:kerning",
	});
}

export default Component;
