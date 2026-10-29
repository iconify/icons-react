import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-ugn55mt.css';
import '../../css/h/hjufvobrv.css';
import '../../css/h/hmjxisbnw.css';
import '../../css/f/f4afasbio.css';
import '../../css/p/pquhobcwo.css';
import '../../css/u/umh2lsb-j.css';
import '../../css/d/d23_j3b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-ugn55mt wm-shadow"/><path class="hjufvobrv wm-k"/><path class="hmjxisbnw wm-k"/><path class="f4afasbio wm-k"/><path class="pquhobcwo wm-k"/><path class="umh2lsb-j wm-k"/><path class="d23_j3b8n wm-shine"/>`,
		"fallback": "withicons-pastel:message-circle",
	});
}

export default Component;
