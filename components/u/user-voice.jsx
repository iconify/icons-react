import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjh0piecs.css';
import '../../css/t/tiru1tbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjh0piecs"/><path class="tiru1tbyt"/>`,
		"fallback": "bxs:user-voice",
	});
}

export default Component;
