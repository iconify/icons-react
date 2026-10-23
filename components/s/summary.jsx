import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tumwjj4xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tumwjj4xq"/>`,
		"fallback": "vadivam:summary",
	});
}

export default Component;
