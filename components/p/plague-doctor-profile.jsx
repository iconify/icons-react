import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxzz49brv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxzz49brv"/>`,
		"fallback": "game-icons:plague-doctor-profile",
	});
}

export default Component;
