import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr_znibnd.css';
import '../../css/z/zrh1fac9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary yr_znibnd"/><path class="primary zrh1fac9v"/>`,
		"fallback": "iconaut:rewind-duo",
	});
}

export default Component;
