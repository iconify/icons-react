import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n1hf8wbde.css';
import '../../css/p/py4wdgbnb.css';
import '../../css/m/m5ccstaut.css';
import '../../css/t/tuxpj-bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n1hf8wbde"/><path class="py4wdgbnb"/><path class="m5ccstaut"/><path class="tuxpj-bux"/></g>`,
		"fallback": "hugeicons:mouse-right-click-01",
	});
}

export default Component;
