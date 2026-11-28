import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npacfebic.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kuyyqyb3r.css';
import '../../css/a/au2axfpqi.css';
import '../../css/n/naq93vzxl.css';
import '../../css/z/zt15rdbux.css';
import '../../css/t/tq_qz2g5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npacfebic secondary"/><g class="dt0cm9dhy primary"><path class="kuyyqyb3r"/><path class="au2axfpqi"/><path class="naq93vzxl"/><path class="zt15rdbux"/><path class="tq_qz2g5s"/></g>`,
		"fallback": "iconaut:podcast-duo",
	});
}

export default Component;
