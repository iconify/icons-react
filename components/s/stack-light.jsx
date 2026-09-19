import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rsqaxjbon.css';
import '../../css/x/x2opukbfv.css';
import '../../css/r/rpii8mbom.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="rsqaxjbon"/><path class="x2opukbfv"/><path class="rpii8mbom"/></g>`,
		"fallback": "icon-park-solid:stack-light",
	});
}

export default Component;
