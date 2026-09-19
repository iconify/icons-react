import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nl2tadb7o.css';
import '../../css/e/el1q2lb9x.css';
import '../../css/n/nses1pbgu.css';
import '../../css/k/krl05wbxy.css';
import '../../css/a/av8sgbbmn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nl2tadb7o"/><path class="el1q2lb9x"/><path class="nses1pbgu"/><path class="krl05wbxy"/><path class="av8sgbbmn"/></g>`,
		"fallback": "fluent-emoji-flat:light-bulb",
	});
}

export default Component;
