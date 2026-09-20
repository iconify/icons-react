import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4e9tjb-p.css';
import '../../css/r/r33vs8zyw.css';
import '../../css/w/w7guu_23n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c4e9tjb-p"/><path clip-rule="evenodd" class="r33vs8zyw"/><path class="w7guu_23n"/>`,
		"fallback": "token:sfm",
	});
}

export default Component;
