import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vba91-9tu.css';
import '../../css/a/aov21455f.css';
import '../../css/s/sj-t9nb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vba91-9tu"/><path class="aov21455f"/><path class="sj-t9nb2l"/></g>`,
		"fallback": "streamline-freehand:playlist-menu",
	});
}

export default Component;
