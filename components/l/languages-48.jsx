import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvm03rryn.css';
import '../../css/h/h_1byfbub.css';
import '../../css/k/kv9lofb8u.css';
import '../../css/b/b2i4qcwof.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvm03rryn"/><path class="h_1byfbub"/><path class="kv9lofb8u"/><path class="b2i4qcwof"/>`,
		"fallback": "energy-icons:languages-48",
	});
}

export default Component;
