import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m3d9b5bic.css';
import '../../css/t/tb5ln68hg.css';
import '../../css/v/vx2joeb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m3d9b5bic"/><path class="tb5ln68hg"/><path class="vx2joeb3w"/></g>`,
		"fallback": "reicon:truck3",
	});
}

export default Component;
