import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b62vflb1m.css';
import '../../css/y/ydu7we8nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b62vflb1m"/><path class="ydu7we8nl"/></g>`,
		"fallback": "tdesign:teahouse",
	});
}

export default Component;
