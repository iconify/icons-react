import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/k94jl6vfx.css';
import '../../css/a/ayj3gb6gy.css';
import '../../css/l/lk_m0yl0m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="k94jl6vfx"/><path class="ayj3gb6gy"/><path class="lk_m0yl0m"/></g>`,
		"fallback": "icon-park-solid:share-one",
	});
}

export default Component;
