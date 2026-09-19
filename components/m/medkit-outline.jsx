import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrosq435m.css';
import '../../css/z/zu47cb4-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrosq435m"/><path clip-rule="evenodd" class="zu47cb4-i"/>`,
		"fallback": "basil:medkit-outline",
	});
}

export default Component;
