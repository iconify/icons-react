import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zri1lgb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zri1lgb0k"/>`,
		"fallback": "uit:triangle",
	});
}

export default Component;
