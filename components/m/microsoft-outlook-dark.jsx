import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db3ssmd3t.css';
import '../../css/b/bvn70c7ka.css';
import '../../css/r/roqwiebga.css';
import '../../css/d/dig8acc1g.css';
import '../../css/s/san_xbb0s.css';
import '../../css/z/zuyihnbxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db3ssmd3t"/><path class="bvn70c7ka"/><path class="roqwiebga"/><path class="dig8acc1g"/><path class="san_xbb0s"/><path class="zuyihnbxi"/>`,
		"fallback": "selfhst:microsoft-outlook-dark",
	});
}

export default Component;
