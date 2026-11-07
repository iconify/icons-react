import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag883ssbj.css';
import '../../css/q/qumoqc5xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ag883ssbj"/><path class="qumoqc5xm"/>`,
		"fallback": "solar:phone-rounded-bold-duotone",
	});
}

export default Component;
