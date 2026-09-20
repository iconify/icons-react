import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqwd18b9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqwd18b9t"/>`,
		"fallback": "mynaui:letter-e-waves-solid",
	});
}

export default Component;
