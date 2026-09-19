import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypu5ngbio.css';
import '../../css/i/i2t1upb9f.css';
import '../../css/w/wazoh8bmu.css';
import '../../css/z/zj07nkhgf.css';
import '../../css/p/p55k-ub0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypu5ngbio"/><path class="i2t1upb9f"/><path class="wazoh8bmu"/><path class="zj07nkhgf"/><path class="p55k-ub0l"/>`,
		"fallback": "fxemoji:nutandbolt",
	});
}

export default Component;
