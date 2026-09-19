import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o83hmlbdl.css';
import '../../css/s/sx_geyq0r.css';
import '../../css/v/vd2qydbub.css';
import '../../css/d/db6kv-wle.css';
import '../../css/j/je6tlkm1l.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGw2PjFdIA"><path class="o83hmlbdl"/></clipPath></defs><g clip-path="url(#SVGw2PjFdIA)" class="sx_geyq0r"><path class="vd2qydbub"/><path class="db6kv-wle"/><path class="je6tlkm1l"/></g>`,
		"fallback": "flag:is-4x3",
	});
}

export default Component;
