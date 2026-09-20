import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f54d6gbwz.css';
import '../../css/a/av6a20b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f54d6gbwz"/><path class="av6a20b4x"/></g>`,
		"fallback": "tdesign:logo-framer",
	});
}

export default Component;
