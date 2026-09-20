import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm90w563o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm90w563o"/>`,
		"fallback": "reicon:voice-square-filled",
	});
}

export default Component;
