import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eov8_z5fj.css';
import '../../css/p/praafsb7s.css';
import '../../css/e/e69gel2-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eov8_z5fj"/><path class="praafsb7s"/><path class="e69gel2-w"/></g>`,
		"fallback": "streamline-freehand:saving-piggy-bank",
	});
}

export default Component;
