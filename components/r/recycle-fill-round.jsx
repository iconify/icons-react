import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk8-yaces.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk8-yaces"/>`,
		"fallback": "coolicons:recycle-fill-round",
	});
}

export default Component;
