import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bdk7noblq.css';
import '../../css/d/dr5p9kb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bdk7noblq"/><path class="dr5p9kb6s"/></g>`,
		"fallback": "streamline-sharp-color:roller-paintbrush-flat",
	});
}

export default Component;
