import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq0rzh6os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq0rzh6os"/>`,
		"fallback": "cbi:vert-blind-open",
	});
}

export default Component;
