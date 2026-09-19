import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6sbgrbey.css';

const viewBox = {"width":34,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6sbgrbey"/>`,
		"fallback": "fontisto:taxi",
	});
}

export default Component;
