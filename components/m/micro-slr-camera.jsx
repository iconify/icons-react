import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uz9uy7e0i.css';
import '../../css/z/zh9jzvb3q.css';
import '../../css/h/humfpgw5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uz9uy7e0i"/><path class="zh9jzvb3q"/><path class="humfpgw5a"/></g>`,
		"fallback": "icon-park-outline:micro-slr-camera",
	});
}

export default Component;
