import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q58kriblw.css';
import '../../css/t/tc02e-b4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q58kriblw"/><path class="tc02e-b4g"/>`,
		"fallback": "fxemoji:soccerball",
	});
}

export default Component;
