import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjjo0nbkw.css';
import '../../css/z/z0uh4cbbm.css';
import '../../css/y/ywpt9tc6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjjo0nbkw"/><path class="z0uh4cbbm"/><path class="ywpt9tc6d"/></g>`,
		"fallback": "tdesign:logo-android",
	});
}

export default Component;
