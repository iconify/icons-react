import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lks-hgj9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lks-hgj9k"/>`,
		"fallback": "mynaui:rewind-diamond-solid",
	});
}

export default Component;
