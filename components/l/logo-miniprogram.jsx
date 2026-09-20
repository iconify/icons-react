import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/l/lio31ybkz.css';
import '../../css/a/au1g5-box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9-zrkb4g"/><path class="lio31ybkz"/><path class="au1g5-box"/></g>`,
		"fallback": "tdesign:logo-miniprogram",
	});
}

export default Component;
