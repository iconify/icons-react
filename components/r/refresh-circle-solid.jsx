import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1a9uuxuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b1a9uuxuq"/>`,
		"fallback": "iconoir:refresh-circle-solid",
	});
}

export default Component;
