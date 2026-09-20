import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg372g3ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yg372g3ed"/>`,
		"fallback": "qlementine-icons:mastering-24",
	});
}

export default Component;
