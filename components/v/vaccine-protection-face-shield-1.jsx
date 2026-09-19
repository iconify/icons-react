import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ldmkd1blz.css';
import '../../css/x/xw25w-bst.css';
import '../../css/r/rie-5-99g.css';
import '../../css/k/k3djch2so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ldmkd1blz"/><path class="xw25w-bst"/><path class="rie-5-99g"/><path class="k3djch2so"/></g>`,
		"fallback": "covid:vaccine-protection-face-shield-1",
	});
}

export default Component;
