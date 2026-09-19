import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exr-mn5mf.css';
import '../../css/w/wtzj__boa.css';
import '../../css/o/oz8s-bbju.css';
import '../../css/p/peada08tm.css';
import '../../css/k/kyzehnb_r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="exr-mn5mf"/><path class="wtzj__boa"/><path class="oz8s-bbju"/><path class="peada08tm"/><path class="kyzehnb_r"/></g>`,
		"fallback": "fluent-emoji-flat:sailboat",
	});
}

export default Component;
