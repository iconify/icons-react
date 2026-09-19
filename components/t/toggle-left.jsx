import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h835kxbil.css';
import '../../css/v/vi0k319by.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h835kxbil"/><path class="vi0k319by"/>`,
		"fallback": "boxicons:toggle-left",
	});
}

export default Component;
