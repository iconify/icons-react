import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl19-4ccv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl19-4ccv"/>`,
		"fallback": "game-icons:on-sight",
	});
}

export default Component;
