import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g01xymbot.css';
import '../../css/y/yowiz7siz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g01xymbot"/><path class="yowiz7siz"/></g>`,
		"fallback": "streamline-freehand:meeting-presentation",
	});
}

export default Component;
