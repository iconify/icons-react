import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p2x-2zppy.css';
import '../../css/o/os2k7xoen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p2x-2zppy"/><path class="os2k7xoen"/></g>`,
		"fallback": "reicon:reorder2",
	});
}

export default Component;
