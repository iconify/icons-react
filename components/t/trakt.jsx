import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-k3q1bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-k3q1bfq"/>`,
		"fallback": "thesvg-color:trakt",
	});
}

export default Component;
