import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yt8hcjwme.css';
import '../../css/n/n1z8l7bfw.css';
import '../../css/q/qj0m4nk1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yt8hcjwme"/><path class="n1z8l7bfw"/><path class="qj0m4nk1n"/></g>`,
		"fallback": "streamline-freehand:playlist-album-1",
	});
}

export default Component;
