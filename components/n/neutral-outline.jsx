import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fqimk247c.css';
import '../../css/s/s_04af0zs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fqimk247c"/><path class="s_04af0zs"/></g>`,
		"fallback": "healthicons:neutral-outline",
	});
}

export default Component;
