import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdob9slbu.css';
import '../../css/w/womkpu5er.css';
import '../../css/d/dhs0g5bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdob9slbu"/><path class="womkpu5er"/><path class="dhs0g5bcg"/>`,
		"fallback": "solar:quit-pip-bold-duotone",
	});
}

export default Component;
