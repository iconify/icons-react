import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/k32lvcurk.css';
import '../../css/m/mxzdjhy-d.css';
import '../../css/s/sm8-7hzdf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="k32lvcurk"/><path class="mxzdjhy-d"/><path class="sm8-7hzdf"/></g>`,
		"fallback": "icon-park:ranking",
	});
}

export default Component;
