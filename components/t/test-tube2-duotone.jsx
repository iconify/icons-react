import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/znqf-1eyg.css';
import '../../css/p/pwv66hiqu.css';
import '../../css/t/ts9kdub8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="znqf-1eyg"/><path clip-rule="evenodd" class="pwv66hiqu"/><path class="ts9kdub8g"/></g>`,
		"fallback": "reicon:test-tube2-duotone",
	});
}

export default Component;
