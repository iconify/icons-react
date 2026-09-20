import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b59ndpb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b59ndpb0w"/>`,
		"fallback": "keyline-icons:rocket-2",
	});
}

export default Component;
