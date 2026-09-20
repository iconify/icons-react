import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/df0m-xmkz.css';
import '../../css/n/ny872o2at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="df0m-xmkz"/><path class="ny872o2at"/></g>`,
		"fallback": "tdesign:seal",
	});
}

export default Component;
