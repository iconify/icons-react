import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k7f7gcvmv.css';
import '../../css/l/lr6pz8b9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k7f7gcvmv"/><path class="lr6pz8b9h"/></g>`,
		"fallback": "hugeicons:venetian-mask",
	});
}

export default Component;
