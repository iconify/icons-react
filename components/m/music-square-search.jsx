import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wam95vb3m.css';
import '../../css/l/lkq7kmb6r.css';
import '../../css/o/o91kfxbtx.css';
import '../../css/t/t183jetlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wam95vb3m"/><path class="lkq7kmb6r"/><path class="o91kfxbtx"/><path class="t183jetlw"/></g>`,
		"fallback": "reicon:music-square-search",
	});
}

export default Component;
