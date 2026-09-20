import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcamdxkrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcamdxkrm"/>`,
		"fallback": "mynaui:spinner-one",
	});
}

export default Component;
