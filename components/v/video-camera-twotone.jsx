import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jib32ub8s.css';
import '../../css/q/qvm7p4brn.css';
import '../../css/d/d3r-gqy_o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jib32ub8s"/><path class="qvm7p4brn"/><path class="d3r-gqy_o"/>`,
		"fallback": "ant-design:video-camera-twotone",
	});
}

export default Component;
