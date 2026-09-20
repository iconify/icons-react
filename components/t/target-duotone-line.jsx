import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ch19v3bee.css';
import '../../css/v/vi6jplbfg.css';
import '../../css/y/yg3s2lbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ch19v3bee"/><path clip-rule="evenodd" class="vi6jplbfg"/><path class="yg3s2lbnw"/></g>`,
		"fallback": "lets-icons:target-duotone-line",
	});
}

export default Component;
