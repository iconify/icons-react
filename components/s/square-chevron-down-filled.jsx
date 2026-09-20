import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_vo2cbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_vo2cbky"/>`,
		"fallback": "tabler:square-chevron-down-filled",
	});
}

export default Component;
