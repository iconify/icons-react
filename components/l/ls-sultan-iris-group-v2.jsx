import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6hofvv1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6hofvv1s"/>`,
		"fallback": "cbi:ls-sultan-iris-group-v2",
	});
}

export default Component;
