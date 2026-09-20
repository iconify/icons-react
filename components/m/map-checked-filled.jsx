import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz-9m7b0m.css';
import '../../css/o/oi5x-1v0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz-9m7b0m"/><path class="oi5x-1v0u"/>`,
		"fallback": "tdesign:map-checked-filled",
	});
}

export default Component;
