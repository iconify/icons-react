import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7c6kyeht.css';
import '../../css/k/kd63pacrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7c6kyeht"/><path class="kd63pacrp"/>`,
		"fallback": "uim:telegram-alt",
	});
}

export default Component;
