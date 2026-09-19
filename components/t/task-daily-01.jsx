import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kq-tn76qx.css';
import '../../css/y/yaprpabxg.css';
import '../../css/y/yqef1emrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kq-tn76qx"/><path class="yaprpabxg"/><path class="yqef1emrk"/></g>`,
		"fallback": "hugeicons:task-daily-01",
	});
}

export default Component;
