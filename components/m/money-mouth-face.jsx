import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/u/umzxywbps.css';
import '../../css/s/ssdayxftq.css';
import '../../css/i/img_qobua.css';
import '../../css/z/zg2xogbif.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="umzxywbps"/><path class="ssdayxftq"/><path class="img_qobua"/><path class="zg2xogbif"/></g>`,
		"fallback": "fluent-emoji-flat:money-mouth-face",
	});
}

export default Component;
