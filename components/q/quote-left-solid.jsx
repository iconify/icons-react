import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b450yybgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b450yybgm"/>`,
		"fallback": "pixel:quote-left-solid",
	});
}

export default Component;
