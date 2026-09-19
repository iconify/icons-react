import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9q_74q2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v9q_74q2m"/>`,
		"fallback": "akar-icons:more-horizontal-fill",
	});
}

export default Component;
