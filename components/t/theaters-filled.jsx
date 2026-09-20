import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsw7fgbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsw7fgbsm"/>`,
		"fallback": "tdesign:theaters-filled",
	});
}

export default Component;
