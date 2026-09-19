import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/k_n38-uqo.css';
import '../../css/u/uj6jun1kw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="k_n38-uqo"/><path class="uj6jun1kw"/></g>`,
		"fallback": "icon-park-outline:phone-outgoing-one",
	});
}

export default Component;
