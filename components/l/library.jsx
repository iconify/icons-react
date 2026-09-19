import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3fwb-27e.css';
import '../../css/o/owlnadbcb.css';
import '../../css/k/kbe_yhbuk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3fwb-27e"/><rect class="owlnadbcb"/><path class="kbe_yhbuk"/>`,
		"fallback": "famicons:library",
	});
}

export default Component;
