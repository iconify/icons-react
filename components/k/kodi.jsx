import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvhfc9blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvhfc9blt"/>`,
		"fallback": "cbi:kodi",
	});
}

export default Component;
