import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o50j3bb0t.css';
import '../../css/e/ei7gp9r8j.css';
import '../../css/h/hrld5ibxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o50j3bb0t"/><circle class="ei7gp9r8j"/><path class="hrld5ibxo"/></g>`,
		"fallback": "hugeicons:user-pen",
	});
}

export default Component;
