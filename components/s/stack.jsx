import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ld-vaf42i.css';
import '../../css/d/d70hihddh.css';
import '../../css/h/hr2s4cbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ld-vaf42i"/><path class="d70hihddh"/><path class="hr2s4cbop"/></g>`,
		"fallback": "mage:stack",
	});
}

export default Component;
