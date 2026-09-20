import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b0i86-b3x.css';
import '../../css/i/izcczcqzd.css';
import '../../css/a/a4tz-rb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b0i86-b3x"/><path class="izcczcqzd"/><path class="a4tz-rb9e"/></g>`,
		"fallback": "streamline-freehand:mobilephone-action-settings",
	});
}

export default Component;
