import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eg5gvrb9o.css';
import '../../css/y/yndgy3_ld.css';
import '../../css/s/sc8yaw92x.css';
import '../../css/g/g0yzzcbeq.css';
import '../../css/t/tbibpub0r.css';
import '../../css/t/tsz5ara4a.css';

const viewBox = {"width":99,"height":99};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eg5gvrb9o"/><path class="yndgy3_ld"/><path class="sc8yaw92x"/><path class="g0yzzcbeq"/><path class="tbibpub0r"/><path class="tsz5ara4a"/></g>`,
		"fallback": "glyphs:recycle-bold",
	});
}

export default Component;
