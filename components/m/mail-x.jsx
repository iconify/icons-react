import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l05kllblb.css';
import '../../css/m/mvuk3sn6m.css';
import '../../css/t/te-uyzerb.css';
import '../../css/s/s07l5sb7t.css';
import '../../css/z/z3kg_0ldp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="l05kllblb wm-shadow"/><path class="mvuk3sn6m wm-shadow"/><path class="te-uyzerb"/><path class="s07l5sb7t"/><path class="wm-s z3kg_0ldp"/></g>`,
		"fallback": "withicons-brutal:mail-x",
	});
}

export default Component;
