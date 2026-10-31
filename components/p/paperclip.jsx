import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bo7q1nb0d.css';
import '../../css/a/akja1lbui.css';
import '../../css/s/s85ftew3c.css';
import '../../css/s/skpvdybaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bo7q1nb0d wm-shadow"/><path class="akja1lbui wm-shadow"/><path class="s85ftew3c"/><path class="skpvdybaq"/></g>`,
		"fallback": "withicons-brutal:paperclip",
	});
}

export default Component;
