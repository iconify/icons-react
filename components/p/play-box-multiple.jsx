import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0jbyb2bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0jbyb2bz"/>`,
		"fallback": "mdi:play-box-multiple",
	});
}

export default Component;
