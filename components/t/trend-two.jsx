import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/jil8u0uzb.css';
import '../../css/x/xfza_inel.css';
import '../../css/g/gsve-y8zy.css';
import '../../css/t/tmfumsb6h.css';
import '../../css/j/jb583abfu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="jil8u0uzb"/><path class="xfza_inel"/><path class="gsve-y8zy"/><path class="tmfumsb6h"/><path class="jb583abfu"/></g>`,
		"fallback": "icon-park:trend-two",
	});
}

export default Component;
