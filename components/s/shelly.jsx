import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqwt34krm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqwt34krm"/>`,
		"fallback": "thesvg-color:shelly",
	});
}

export default Component;
