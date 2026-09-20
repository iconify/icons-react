import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra-_p7bsg.css';
import '../../css/a/acuwqsypk.css';
import '../../css/g/g-ii3kbjw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra-_p7bsg"/><path class="acuwqsypk"/><path class="g-ii3kbjw"/>`,
		"fallback": "selfhst:positive-intentions",
	});
}

export default Component;
