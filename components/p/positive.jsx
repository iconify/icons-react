import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oepaa3bfp.css';
import '../../css/b/b43jnxb1f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oepaa3bfp"/><path class="b43jnxb1f"/></g>`,
		"fallback": "healthicons:positive",
	});
}

export default Component;
