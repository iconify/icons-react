import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/urqs7tbta.css';
import '../../css/t/t_572scym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="urqs7tbta"/><path class="t_572scym"/></g>`,
		"fallback": "covid:virus-lab-research-syringe",
	});
}

export default Component;
