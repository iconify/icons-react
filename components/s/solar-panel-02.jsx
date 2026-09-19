import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e054khbwg.css';
import '../../css/a/ajn89rgng.css';
import '../../css/o/oexh4b5fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e054khbwg"/><path class="ajn89rgng"/><path class="oexh4b5fx"/></g>`,
		"fallback": "hugeicons:solar-panel-02",
	});
}

export default Component;
