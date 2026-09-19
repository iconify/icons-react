import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf-wdxbtk.css';
import '../../css/k/krz3t3bmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf-wdxbtk"/><path class="krz3t3bmn"/>`,
		"fallback": "cil:remove",
	});
}

export default Component;
