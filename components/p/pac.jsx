import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_9tr3bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_9tr3bec"/>`,
		"fallback": "token:pac",
	});
}

export default Component;
