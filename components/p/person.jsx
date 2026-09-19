import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os6uvc61m.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os6uvc61m"/>`,
		"fallback": "fontisto:person",
	});
}

export default Component;
