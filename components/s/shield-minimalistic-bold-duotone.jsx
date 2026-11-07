import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gry2dppuz.css';
import '../../css/l/lm1gwl2sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gry2dppuz"/><path class="lm1gwl2sk"/>`,
		"fallback": "solar:shield-minimalistic-bold-duotone",
	});
}

export default Component;
