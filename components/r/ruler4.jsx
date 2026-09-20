import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbzc4ebog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbzc4ebog"/>`,
		"fallback": "reicon:ruler4",
	});
}

export default Component;
