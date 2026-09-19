import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/apv_ygbqp.css';
import '../../css/w/w9s7wq5uk.css';
import '../../css/w/wnhgvjbbd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="apv_ygbqp"/><path class="w9s7wq5uk"/><path class="wnhgvjbbd"/></g>`,
		"fallback": "icon-park:phone-missed",
	});
}

export default Component;
