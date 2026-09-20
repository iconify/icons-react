import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jl8-icbvy.css';
import '../../css/z/zf4kye8oc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jl8-icbvy"/><path class="zf4kye8oc"/></g>`,
		"fallback": "pepicons-print:menu",
	});
}

export default Component;
