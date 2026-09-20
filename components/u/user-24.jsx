import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r86igdcpy.css';
import '../../css/z/zqwnycjqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r86igdcpy"/><path clip-rule="evenodd" class="zqwnycjqz"/>`,
		"fallback": "qlementine-icons:user-24",
	});
}

export default Component;
