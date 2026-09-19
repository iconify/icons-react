import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b21075lxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b21075lxq"/>`,
		"fallback": "iconamoon:move-light",
	});
}

export default Component;
