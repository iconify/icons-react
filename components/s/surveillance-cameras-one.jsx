import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/g/g7lpxxbmh.css';
import '../../css/l/lo1qem4dc.css';
import '../../css/h/h8tqvyb5j.css';
import '../../css/b/b64n8bc3q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="g7lpxxbmh"/><path class="lo1qem4dc"/><path class="h8tqvyb5j"/><path class="b64n8bc3q"/></g>`,
		"fallback": "icon-park:surveillance-cameras-one",
	});
}

export default Component;
