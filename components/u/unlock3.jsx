import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mupkmfwjs.css';
import '../../css/l/lozfoibcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mupkmfwjs"/><path class="lozfoibcx"/></g>`,
		"fallback": "reicon:unlock3",
	});
}

export default Component;
