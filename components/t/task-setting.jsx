import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/byg8lkb6t.css';
import '../../css/s/s2pt9_z9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="byg8lkb6t"/><path class="s2pt9_z9w"/></g>`,
		"fallback": "tdesign:task-setting",
	});
}

export default Component;
