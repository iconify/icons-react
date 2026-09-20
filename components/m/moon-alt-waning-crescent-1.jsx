import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxd78lb7m.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxd78lb7m"/>`,
		"fallback": "wi:moon-alt-waning-crescent-1",
	});
}

export default Component;
