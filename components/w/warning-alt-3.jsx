import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ywb1w7-yw.css';
import '../../css/l/ld54_pb1a.css';
import '../../css/m/m5q4dxbpi.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ywb1w7-yw"/><path class="ld54_pb1a"/><path class="m5q4dxbpi"/></g>`,
		"fallback": "marketeq:warning-alt-3",
	});
}

export default Component;
