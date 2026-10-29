import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiy69acjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiy69acjc"/>`,
		"fallback": "withicons:play-solid",
	});
}

export default Component;
