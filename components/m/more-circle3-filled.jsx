import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3dcukb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3dcukb3s"/>`,
		"fallback": "reicon:more-circle3-filled",
	});
}

export default Component;
