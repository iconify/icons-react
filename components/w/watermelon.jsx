import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1-qcql6r.css';
import '../../css/i/ixgo5sb3w.css';
import '../../css/q/qyesjvbad.css';
import '../../css/r/rygpgz4rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v1-qcql6r"/><path class="ixgo5sb3w"/><path class="qyesjvbad"/><path class="rygpgz4rk"/></g>`,
		"fallback": "streamline-cyber-color:watermelon",
	});
}

export default Component;
