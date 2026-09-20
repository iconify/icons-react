import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/avdkk0beh.css';
import '../../css/p/p9ga7eb6t.css';
import '../../css/n/n4jwq5b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="avdkk0beh"/><path class="p9ga7eb6t"/><path class="n4jwq5b_c"/></g>`,
		"fallback": "streamline-freehand:show-hat-magician",
	});
}

export default Component;
