import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqpl8jb6z.css';
import '../../css/v/vamw6spgm.css';
import '../../css/j/j2l4c4iul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqpl8jb6z"/><path clip-rule="evenodd" class="vamw6spgm"/><path class="j2l4c4iul"/>`,
		"fallback": "solar:running-bold-duotone",
	});
}

export default Component;
