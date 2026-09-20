import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqvbh5p1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqvbh5p1u"/>`,
		"fallback": "tabler:square-rounded-letter-l-filled",
	});
}

export default Component;
