import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac0-4ubcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac0-4ubcc"/>`,
		"fallback": "vadivam:play",
	});
}

export default Component;
