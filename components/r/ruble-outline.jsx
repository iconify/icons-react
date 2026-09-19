import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aaugicc2g.css';
import '../../css/s/sbngp3bjy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="aaugicc2g"/><path class="sbngp3bjy"/></g>`,
		"fallback": "healthicons:ruble-outline",
	});
}

export default Component;
