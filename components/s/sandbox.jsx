import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dej0zfcri.css';
import '../../css/c/c3dz4vwtf.css';
import '../../css/i/ikx892b0n.css';
import '../../css/q/qrk7i-jmd.css';
import '../../css/e/e3mc55d5q.css';
import '../../css/o/o2280qffp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dej0zfcri"/><circle class="c3dz4vwtf"/><circle class="ikx892b0n"/><path class="qrk7i-jmd"/><path class="e3mc55d5q"/><path class="o2280qffp"/>`,
		"fallback": "eos-icons:sandbox",
	});
}

export default Component;
