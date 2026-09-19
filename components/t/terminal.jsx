import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzg1bwb1s.css';
import '../../css/v/vfddtzbiw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzg1bwb1s"/><path class="vfddtzbiw"/>`,
		"fallback": "cil:terminal",
	});
}

export default Component;
