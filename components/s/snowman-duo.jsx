import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r0r7u1_0t.css';
import '../../css/s/s3lm-mglt.css';
import '../../css/q/qi4ha9bda.css';
import '../../css/y/yjdxjfw-o.css';
import '../../css/w/wjqa29b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r0r7u1_0t"/><path class="s3lm-mglt wm-a"/><path class="qi4ha9bda wm-s"/><path class="yjdxjfw-o"/><path class="wjqa29b2k wm-a"/></g>`,
		"fallback": "withicons:snowman-duo",
	});
}

export default Component;
