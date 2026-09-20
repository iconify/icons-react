import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxm86wb9r.css';
import '../../css/j/j7x77swvu.css';
import '../../css/h/hagay2vjp.css';
import '../../css/a/aejponlie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pxm86wb9r"/><path clip-rule="evenodd" class="j7x77swvu"/><path class="hagay2vjp"/><path class="aejponlie"/>`,
		"fallback": "token:vxv",
	});
}

export default Component;
