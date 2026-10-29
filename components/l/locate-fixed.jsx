import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lt-tm7l0c.css';
import '../../css/p/p-njznblk.css';
import '../../css/u/umahcf75g.css';
import '../../css/r/r8jsswd-a.css';
import '../../css/w/w2l5azv7t.css';
import '../../css/h/h4lk3hbvk.css';
import '../../css/e/eq23-ts-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lt-tm7l0c wm-shadow"/><path class="p-njznblk wm-shadow"/><path class="umahcf75g"/><path class="r8jsswd-a"/><path class="w2l5azv7t"/><path class="h4lk3hbvk"/><path class="eq23-ts-d"/></g>`,
		"fallback": "withicons-skeuo:locate-fixed",
	});
}

export default Component;
