import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmnoaub3f.css';
import '../../css/y/y4c08ncxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bmnoaub3f"/><path class="y4c08ncxf"/>`,
		"fallback": "solar:list-heart-minimalistic-bold-duotone",
	});
}

export default Component;
