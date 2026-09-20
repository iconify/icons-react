import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l-le6db3g.css';
import '../../css/b/boua-5_zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l-le6db3g"/><path class="boua-5_zk"/></g>`,
		"fallback": "streamline-ultimate:ubuntu-logo",
	});
}

export default Component;
