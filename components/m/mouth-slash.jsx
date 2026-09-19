import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfe3hlzex.css';
import '../../css/n/ncinpdbjf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfe3hlzex"/><path class="ncinpdbjf"/>`,
		"fallback": "cil:mouth-slash",
	});
}

export default Component;
