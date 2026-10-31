import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o1bscwjgq.css';
import '../../css/d/d5a_wibzk.css';
import '../../css/l/l4hgmv0nj.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="o1bscwjgq"/><path class="d5a_wibzk wm-k"/><path class="l4hgmv0nj wm-a"/><path class="w49ngccqq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:person-swimming",
	});
}

export default Component;
