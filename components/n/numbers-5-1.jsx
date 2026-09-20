import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak2bjr-cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak2bjr-cn"/>`,
		"fallback": "tdesign:numbers-5-1",
	});
}

export default Component;
