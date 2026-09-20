import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zc-21xt6j.css';
import '../../css/d/dxckk5x7i.css';
import '../../css/i/iioyx2-ru.css';
import '../../css/x/xkknsln7g.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zc-21xt6j"/><path clip-rule="evenodd" class="dxckk5x7i"/><path clip-rule="evenodd" class="iioyx2-ru"/><path clip-rule="evenodd" class="xkknsln7g"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:television-play-circle-off",
	});
}

export default Component;
