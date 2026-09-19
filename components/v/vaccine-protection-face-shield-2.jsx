import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/apjx_3bim.css';
import '../../css/s/sp_s36tzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="apjx_3bim"/><path class="sp_s36tzg"/></g>`,
		"fallback": "covid:vaccine-protection-face-shield-2",
	});
}

export default Component;
