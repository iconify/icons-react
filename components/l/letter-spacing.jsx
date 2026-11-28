import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vl-jeaccl.css';
import '../../css/o/ogr6nyb5z.css';
import '../../css/e/eqhxsr92t.css';
import '../../css/x/xtnobacur.css';
import '../../css/s/s0w6u6b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vl-jeaccl"/><path class="ogr6nyb5z"/><path class="eqhxsr92t"/><path class="xtnobacur"/><path class="s0w6u6b-k"/></g>`,
		"fallback": "iconaut:letter-spacing",
	});
}

export default Component;
