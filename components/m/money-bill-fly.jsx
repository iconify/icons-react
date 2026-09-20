import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z4r1qykhw.css';
import '../../css/r/rn6sezfiu.css';
import '../../css/i/i6rghp2ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z4r1qykhw"/><path class="rn6sezfiu"/><path class="i6rghp2ll"/></g>`,
		"fallback": "streamline-freehand-color:money-bill-fly",
	});
}

export default Component;
