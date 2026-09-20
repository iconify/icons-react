import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/liqqu6bfh.css';
import '../../css/k/k42n6q82g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="liqqu6bfh"/><path class="k42n6q82g"/></g>`,
		"fallback": "streamline:lasso-tool",
	});
}

export default Component;
