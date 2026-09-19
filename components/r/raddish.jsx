import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo_lgwbze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo_lgwbze"/>`,
		"fallback": "game-icons:raddish",
	});
}

export default Component;
