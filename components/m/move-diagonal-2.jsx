import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab6t1wbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab6t1wbqo"/>`,
		"fallback": "vadivam:move-diagonal-2",
	});
}

export default Component;
