import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mb-pe5b7v.css';
import '../../css/b/bzg8--bit.css';
import '../../css/t/tbnkqnbwe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="mb-pe5b7v"/><path clip-rule="evenodd" class="bzg8--bit"/><path class="tbnkqnbwe"/></g>`,
		"fallback": "icon-park-outline:printer",
	});
}

export default Component;
