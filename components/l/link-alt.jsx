import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si-zo371a.css';
import '../../css/r/rpw047bth.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si-zo371a"/><path class="rpw047bth"/>`,
		"fallback": "cil:link-alt",
	});
}

export default Component;
