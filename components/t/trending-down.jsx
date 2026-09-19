import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vk53yjnjo.css';
import '../../css/k/k_ma1ribm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vk53yjnjo"/><path class="k_ma1ribm"/></g>`,
		"fallback": "feather:trending-down",
	});
}

export default Component;
