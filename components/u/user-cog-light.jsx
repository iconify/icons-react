import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8oo03bfv.css';
import '../../css/o/o9-v1yxgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8oo03bfv"/><path class="o9-v1yxgr"/>`,
		"fallback": "stash:user-cog-light",
	});
}

export default Component;
