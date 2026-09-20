import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkbgrjdet.css';
import '../../css/l/l9ksdwb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkbgrjdet"/><path clip-rule="evenodd" class="l9ksdwb6n"/>`,
		"fallback": "stash:side-peek",
	});
}

export default Component;
