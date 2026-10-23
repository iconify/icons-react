import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfpt253yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfpt253yi"/>`,
		"fallback": "vadivam:timer-off",
	});
}

export default Component;
