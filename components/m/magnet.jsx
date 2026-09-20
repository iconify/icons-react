import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tt78vu_jh.css';
import '../../css/e/e6dxm8bil.css';
import '../../css/t/t-098--sw.css';
import '../../css/j/jp2mmyb-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path clip-rule="evenodd" class="tt78vu_jh"/><path class="e6dxm8bil"/><path clip-rule="evenodd" class="t-098--sw"/><path class="jp2mmyb-q"/></g>`,
		"fallback": "streamline-plump-color:magnet",
	});
}

export default Component;
