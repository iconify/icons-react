import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvgdpzb2e.css';
import '../../css/s/s3b5adcgt.css';
import '../../css/o/oxet7p30y.css';
import '../../css/g/gtdnn0bvx.css';
import '../../css/e/e2o0nte5q.css';
import '../../css/g/g14wm2bdx.css';
import '../../css/h/hswnvybat.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvgdpzb2e"/><path class="s3b5adcgt"/><path class="oxet7p30y"/><path class="gtdnn0bvx"/><path class="e2o0nte5q"/><path class="g14wm2bdx"/><path class="hswnvybat"/>`,
		"fallback": "streamline-emojis:oncoming-fist-1",
	});
}

export default Component;
