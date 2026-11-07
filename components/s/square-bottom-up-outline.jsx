import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3cwxfump.css';
import '../../css/h/ho371t52a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3cwxfump"/><path class="ho371t52a"/>`,
		"fallback": "solar:square-bottom-up-outline",
	});
}

export default Component;
