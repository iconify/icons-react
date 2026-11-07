import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz0u67btj.css';
import '../../css/x/x3oufibth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tz0u67btj"/><path class="x3oufibth"/>`,
		"fallback": "solar:quit-pip-bold",
	});
}

export default Component;
