import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhg1abzbn.css';
import '../../css/h/hvzidg40u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lhg1abzbn"/><path class="hvzidg40u"/></g>`,
		"fallback": "streamline-sharp-color:new-sticky-note-flat",
	});
}

export default Component;
