import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yjf-2cb5x.css';
import '../../css/y/y0gos9ywm.css';
import '../../css/v/vwzncsbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="yjf-2cb5x"/><path class="wm-shine y0gos9ywm"/><path class="vwzncsbmf"/></g>`,
		"fallback": "withicons-kawaii:panel-right",
	});
}

export default Component;
