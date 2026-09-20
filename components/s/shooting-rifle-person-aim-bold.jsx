import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0hjnj9rt.css';
import '../../css/e/esva7l_1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0hjnj9rt"/><path class="esva7l_1i"/>`,
		"fallback": "streamline-ultimate:shooting-rifle-person-aim-bold",
	});
}

export default Component;
