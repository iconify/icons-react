import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yuw009bdb.css';
import '../../css/x/xa-dr4z4x.css';
import '../../css/i/il_myibjf.css';
import '../../css/d/ds2n4gb0w.css';
import '../../css/z/zzt5wc4il.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="yuw009bdb"/><path class="wm-shine xa-dr4z4x"/><path class="il_myibjf wm-k"/><path class="ds2n4gb0w wm-a"/><path class="wm-deco zzt5wc4il"/></g>`,
		"fallback": "withicons-kawaii:screwdriver",
	});
}

export default Component;
