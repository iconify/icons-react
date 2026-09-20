import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s5-e5yzzj.css';
import '../../css/g/gcocbhbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s5-e5yzzj"/><path class="gcocbhbxa"/></g>`,
		"fallback": "streamline-freehand-color:terminal",
	});
}

export default Component;
