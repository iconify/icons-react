import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyuumbbis.css';
import '../../css/z/zridksdbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyuumbbis"/><path class="zridksdbg"/>`,
		"fallback": "stash:signout-duotone",
	});
}

export default Component;
