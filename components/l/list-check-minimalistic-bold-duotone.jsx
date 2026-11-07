import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seb4uo8hr.css';
import '../../css/b/b03wwil3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="seb4uo8hr"/><path class="b03wwil3d"/>`,
		"fallback": "solar:list-check-minimalistic-bold-duotone",
	});
}

export default Component;
