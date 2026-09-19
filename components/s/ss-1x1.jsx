import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkn7r21bx.css';
import '../../css/o/oa0rywtqa.css';
import '../../css/m/m3m6fac1f.css';
import '../../css/f/f4ecojumd.css';
import '../../css/l/lyx91lkqy.css';
import '../../css/u/uaezv3n_k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkn7r21bx"/><path class="oa0rywtqa"/><path class="m3m6fac1f"/><path class="f4ecojumd"/><path class="lyx91lkqy"/><path class="uaezv3n_k"/>`,
		"fallback": "flag:ss-1x1",
	});
}

export default Component;
