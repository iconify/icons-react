import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/v/vza_amlsh.css';
import '../../css/v/vt81eebpc.css';
import '../../css/j/j8iio6lkj.css';
import '../../css/g/gkmoj595i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="vza_amlsh"/><path class="vt81eebpc"/><path class="j8iio6lkj"/></g><path class="gkmoj595i"/>`,
		"fallback": "flag:vc-1x1",
	});
}

export default Component;
