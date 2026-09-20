import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi5zknb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi5zknb_f"/>`,
		"fallback": "tdesign:menu-filled",
	});
}

export default Component;
