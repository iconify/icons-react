import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0o9nrvdg.css';
import '../../css/m/mgns90b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0o9nrvdg"/><path class="mgns90b-d"/>`,
		"fallback": "solar:question-mark-bold-duotone",
	});
}

export default Component;
